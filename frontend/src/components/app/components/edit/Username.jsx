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
const Username = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.user?.data);
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post("/user/username", {
      id: store.usr_id,
      username: username,
    });
    dispatch(fetchUser());
  };

  useEffect(() => {
    dispatch(fetchUser());
    setUsername(store.username);
  }, []);
  return (
    <>
      <AlertDialogContent className="w-[350px]">
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-3">
              Edit you username
            </AlertDialogTitle>
            <div className="grid w-full max-w-sm items-center gap-2 ">
              <Label htmlFor="email">Username</Label>
              <Input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                type="text"
                id="email"
                placeholder="@jonhcena"
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

export default Username;
