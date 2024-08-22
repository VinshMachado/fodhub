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
      className="w-[350px] space-y-2 flex flex-col ml-4 mt-2"
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
      <div className="flex flex-col space-y-2 px-4">
        <button className="hover:bg-slate-500 rounded-md w-full border px-4 py-2 font-mono text-sm shadow-sm">
          GitHub
        </button>

        <CollapsibleContent className="flex flex-col space-y-2">
          <button className="hover:bg-slate-500 rounded-md w-full border px-4 py-2 font-mono text-sm shadow-sm">
            Instagram
          </button>
          <button className="hover:bg-slate-500 rounded-md w-full border px-4 py-2 font-mono text-sm shadow-sm">
            Twitter
          </button>
          <button className="hover:bg-slate-500 rounded-md w-full border px-4 py-2 font-mono text-sm shadow-sm">
            Facebook
          </button>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

export default CollapsibleDemo;
