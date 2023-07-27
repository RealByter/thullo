"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { LuGlobe2 } from "react-icons/lu";
import ImageSearch from "./ImageSearch";
import IconButton from "./IconButton";
import Input from "./Input";

export default function CreateBoard() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState(
    "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  );

  return (
    <>
      <Button onClick={() => setIsOpen(true)}><span className="mr-2">+</span> Add Board</Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-start justify-center p-4">
          <Dialog.Panel
            as="div"
            className="mx-auto mt-20 max-w-xs rounded-lg bg-white p-6 shadow-main"
          >
            <div className="relative h-[100px] w-[260px] overflow-hidden rounded-lg">
              <Image fill objectFit="cover" src={cover} alt="" />
            </div>
            <Input value={title}  />
            <div className="flex gap-5">
              <ImageSearch setImage={setCover} />
              <IconButton icon={LuGlobe2} active={false}>
                Public
              </IconButton>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
