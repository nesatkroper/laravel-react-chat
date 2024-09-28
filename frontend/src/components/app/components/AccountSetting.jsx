import { useEffect, useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AtSign, CalendarDays, CircleUser, Phone } from "lucide-react";
import Name from "./edit/Name";
import Username from "./edit/Username";
import PhoneEdit from "./edit/Phone";
import Bio from "./edit/Bio";
import DOB from "./edit/DOB";

const AccountSetting = (props) => {
  const { profile, name, username, email, gender, phone, dob, bio } = props;

  return (
    <DialogContent className="w-[400px] ">
      <DialogHeader>
        <DialogTitle>Settings</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col items-center ">
        <img src={profile} alt="profile image" className="w-[70px] h-[70px]" />
        <div className="flex flex-col ms-3">
          <p className="font-bold text-lg">{name}</p>
          <p className="">+855 {phone}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <Separator className="my-2" />

        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="bg-background hover:bg-gray-200 flex justify-start text-dark h-full text-wrap text-start ">
              {bio}
            </Button>
          </AlertDialogTrigger>
          <Bio oldbio={bio} />
        </AlertDialog>
        <Separator className="my-2" />
        <div className="flex flex-col">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="bg-background hover:bg-gray-200 flex justify-start text-dark my-1 w-full">
                <CircleUser className="me-4" />
                {name}
              </Button>
            </AlertDialogTrigger>
            {/*  */}
            <Name oldname={name} />
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="bg-background hover:bg-gray-200 flex justify-start text-dark my-1 w-full">
                <Phone className="me-4" />
                {phone}
              </Button>
            </AlertDialogTrigger>
            <PhoneEdit />
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="bg-background hover:bg-gray-200 flex justify-start text-dark my-1 w-full">
                <AtSign className="me-4" />
                {username}
              </Button>
            </AlertDialogTrigger>
            <Username />
          </AlertDialog>
        </div>
        <Separator className="my-2" />

        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="bg-background hover:bg-gray-200 flex justify-start text-dark my-1 w-full">
              <CalendarDays className="me-4" />
              {dob}
            </Button>
          </AlertDialogTrigger>
          <DOB />
        </AlertDialog>
      </div>
    </DialogContent>
  );
};

export default AccountSetting;
