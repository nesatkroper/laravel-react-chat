import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axiosInstance from "@/config/axios";

const Name = (props) => {
  const { oldname } = props;
  const [name, setName] = useState(oldname);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post("/user/name", {
      id: localStorage.getItem("id"),
      name: name,
    });
  };
  return (
    <>
      <AlertDialogContent className="w-[350px]">
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-3">Edit you name</AlertDialogTitle>
            <div className="grid w-full max-w-sm items-center gap-2 ">
              <Label htmlFor="name">Name</Label>
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                placeholder="Email"
                value={name}
              />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-3">
            <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Save</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </>
  );
};

export default Name;
