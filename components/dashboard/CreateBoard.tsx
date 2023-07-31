"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Button from "../Button";
import Image from "next/image";
import { LuGlobe2, LuLock } from "react-icons/lu";
import ImageSearch from "./ImageSearch";
import Input from "../Input";
import IconButton from "../IconButton";
import {
  createClientComponentClient,
  createServerActionClient,
} from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { Database } from "../../types/supabase";
import createBoard from "../serverActions/createBoard";

const defaultCover =
  "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

export default function CreateBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState<"public" | "private">("public");
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(defaultCover);
  const [creating, setCreating] = useState(false);

  function resetInputs() {
    setTitle("");
    setVisibility("public");
    setCover(defaultCover);
    setIsOpen(false);
  }

  async function createBoardHandler() {
    setCreating(true);
    await createBoard({ cover, visibility, title });
    setCreating(false);

    resetInputs();
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <span className="mr-2">+</span> Add Board
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-start justify-center p-4">
          <Dialog.Panel
            as="div"
            className="mx-auto mt-20 flex max-w-xs flex-col gap-4 rounded-lg bg-white p-6 shadow-main"
          >
            <div className="relative h-[100px] w-[260px] overflow-hidden rounded-lg">
              <Image fill objectFit="cover" src={cover} alt="" />
            </div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add board title"
            />
            <div className="grid grid-cols-2 gap-5">
              <ImageSearch setImage={setCover} />
              <IconButton
                icon={visibility === "public" ? LuGlobe2 : LuLock}
                active={visibility === "private"}
                onClick={() =>
                  setVisibility((oldState) =>
                    oldState === "public" ? "private" : "public",
                  )
                }
              >
                {visibility === "public" ? "Public" : "Private"}
              </IconButton>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="transparent" onClick={resetInputs}>
                Cancel
              </Button>
              <Button
                variant="blue"
                disabled={title.length === 0 || creating}
                onClick={createBoardHandler}
              >
                {creating ? "+ Creating..." : "+ Create"}
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
function createBoardAction(arg0: {
  cover: string;
  visibility: "public" | "private";
  title: string;
}) {
  throw new Error("Function not implemented.");
}
