"use client";
import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2 flex flex-col ml-4 mt-2 duration-700"
    >
      {/* Header Section */}
      <div className="flex border-3 items-center justify-between px-4">
        <h4 className="text-lg font-normal">
          Connections or whatever it’s called
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col space-y-2 py-2 px-4">
        <button className="relative rounded-md w-full border px-4 py-2 font-mono text-sm shadow-sm transition-transform transition-shadow transition-colors duration-300 ease-in-out bg-black text-white hover:bg-pink-400 hover:scale-105 hover:shadow-lg">
          GitHub
          <span className="absolute inset-0 rounded-md border border-transparent" />
        </button>

        <CollapsibleContent className="flex flex-col space-y-2 ">
          <button className="relative rounded-md w-full border px-4 py-2 font-mono text-sm shadow-sm transition-transform transition-shadow transition-colors duration-300 ease-in-out bg-black text-white hover:bg-pink-400 hover:scale-105 hover:shadow-lg">
            insts
            <span className="absolute inset-0 rounded-md border border-transparent" />
          </button>
          <button className="relative rounded-md w-full border px-4 py-2 font-mono text-sm shadow-sm transition-transform transition-shadow transition-colors duration-300 ease-in-out bg-black text-white hover:bg-pink-400 hover:scale-105 hover:shadow-lg">
            youtube
            <span className="absolute inset-0 rounded-md border border-transparent" />
          </button>
          <button className="relative rounded-md w-full border px-4 py-2 font-mono text-sm shadow-sm transition-transform transition-shadow transition-colors duration-300 ease-in-out bg-black text-white hover:bg-pink-400 hover:scale-105 hover:shadow-lg">
            twitter
            <span className="absolute inset-0 rounded-md border border-transparent" />
          </button>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

export default CollapsibleDemo;
