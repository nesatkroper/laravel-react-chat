import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <React.Fragment>
      <Sheet>
        <SheetTrigger>
          <div
            className="flex bg-gray-400 justify-center w-[45px] h-[100vh]
          "
          >
            <Button className="px-3 mt-2">
              <AlignJustify className="w-4 h-4" />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </React.Fragment>
  );
};

export default Sidebar;
