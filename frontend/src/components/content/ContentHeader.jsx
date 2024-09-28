import React, { useState, useEffect } from "react";
import axiosInstance from "@/config/axios";
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

const ContentHeader = () => {
  const [user, setUser] = useState({
    id: localStorage.getItem("id"),
    baseUrl: localStorage.getItem("baseUrl"),
    name: "",
    username: "",
    phone: "",
    photo: "",
    gender: "",
    bio: "",
  });

  const getUser = async () => {
    const res = await axiosInstance.get("/user").catch((error) => {
      console.log(error);
    });

    setUser({
      name: res.data.name,
      username: res.data.username,
      phone: res.data.phone,
      photo: res.data.photo,
      gender: res.data.gender,
      bio: res.data.bio,
    });
  };

  const profile = `${user.baseUrl}${user.photo}`;

  useEffect(() => {
    getUser();
  }, []);
  return (
    <React.Fragment>
      <div className="border-b shadow-lg py-2 px-4 flex justify-between">
        <Dialog>
          <DialogTrigger>
            <div className="flex">
              <Avatar>
                <AvatarImage src={profile} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ms-2 ">
                <p className="font-bold text-sm">{user.name}</p>
                <p className="text-gray-600 text-xs">{user.phone}</p>
              </div>
            </div>
          </DialogTrigger>
          <ReceiverProfile
            profile={profile}
            name={user.name}
            phone={user.phone}
          />
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
