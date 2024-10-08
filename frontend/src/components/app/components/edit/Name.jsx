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
import { useEffect, useState } from "react";
import axiosInstance from "@/config/axios";
import { fetchUser } from "@/app/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Name = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.user?.data);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post("/user/name", {
      id: store.usr_id,
      name: name,
    });
    dispatch(fetchUser());
  };

  useEffect(() => {
    dispatch(fetchUser());
    setName(store.name);
  }, []);
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
                value={name}
                type="text"
                id="name"
                placeholder="Jonh Cena"
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
