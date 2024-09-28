import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ellipsis, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ReceiverProfile from "./ReceiverProfile.jsx";
import ReceiverOption from "./ReceiverOption.jsx";
import { fetchUser } from "@/app/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const ContentHeader = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.user?.data);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <React.Fragment>
      <div className="border-b shadow-lg py-2 px-4 flex justify-between">
        <Dialog>
          <DialogTrigger>
            <div className="flex">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ms-2 ">
                <p className="font-bold text-sm">{store.name}</p>
                <p className="text-gray-600 text-xs">{store.phone}</p>
              </div>
            </div>
          </DialogTrigger>
          {/*  */}
          <ReceiverProfile />
        </Dialog>
        <div className="flex gap-1 p">
          <Button className="bg-background text-dark px-2 hover:bg-gray-200">
            <Phone />
          </Button>
          <Button className="bg-background text-dark px-2 hover:bg-gray-200">
            <Video />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="bg-background text-dark px-2 hover:bg-gray-200">
                <Ellipsis />
              </Button>
            </DropdownMenuTrigger>
            <ReceiverOption />
          </DropdownMenu>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContentHeader;
