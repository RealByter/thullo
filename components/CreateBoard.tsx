"use client";

import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { LuGlobe2 } from "react-icons/lu";
import ImageSearch from "./ImageSearch";
import IconButton from "./IconButton";

export default function CreateBoard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>+ Add Board</Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel
            as="div"
            className="mx-auto max-w-xs rounded-lg bg-white p-6 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]"
          >
            <div className="relative h-[100px] w-[260px] overflow-hidden rounded-lg">
              <Image
                fill
                objectFit="cover"
                src="https://images.unsplash.com/photo-1689702095156-135bdeb260e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Unsplash photo"
              />
            </div>
            <p>title</p>
            <div className="flex gap-5">
              <ImageSearch setImage={() => {}} />
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
