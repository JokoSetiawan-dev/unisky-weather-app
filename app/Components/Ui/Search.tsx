import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Command, CommandInput } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import locationIcon from "../../../public/location-icon.svg";

const Search: React.FC = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="p-0" variant="ghost">
            <Image
              className="w-[25px] h-auto"
              src={locationIcon}
              alt="search icon"
            />
          </Button>
        </DialogTrigger>
        <DialogContent className="m max-w-[330px] rounded-3xl">
          <DialogHeader className="text-left">
            <DialogTitle className="text-sm">Choosee Location</DialogTitle>
            <DialogDescription className="text-[10px] pb-3">
              Choose the Locations You Want to See
            </DialogDescription>
            <Command className="rounded-full shadow-lg">
              <CommandInput placeholder="Search your location..." />
            </Command>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Search;
