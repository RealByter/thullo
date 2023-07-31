"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Button from "../Button";
import Image from "next/image";
import { LuGlobe2, LuLock } from "react-icons/lu";
import ImageSearch from "./ImageSearch";
import Input from "../Input";
import IconButton from "../IconButton";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const defaultCover =
  "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

export default function CreateBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState<"public" | "private">("public");
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(defaultCover);
  const supabase = createClientComponentClient();

  function resetInputs() {
    setTitle("");
    setVisibility("public");
    setCover(defaultCover);
    setIsOpen(false);
  }

  async function createBoard() {
    const { error: bError, data } = await supabase
      .from("boards")
      .insert({ cover, title, visibility })
      .select("id");
    if (bError) throw bError;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error: mError } = await supabase
      .from("members")
      .insert({ user_id: user?.id, board_id: data[0].id });
    if (mError) throw mError;

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
                disabled={title.length === 0}
                onClick={createBoard}
              >
                + Create
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
