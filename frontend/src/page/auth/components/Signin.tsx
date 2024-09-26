import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import axios from "@/config/axios";

const Signin = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  // const [msg, setMsg] = useState("");
  // const [load, setLoad] = useState(false);

  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/add", {
      username: user.username,
      password: user.password,
    });
  };
  return (
    <React.Fragment>
      <form>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
            type="text"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            type={show ? "text" : "password"}
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox id="terms" onCheckedChange={handleShowPassword} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {show ? "Hide" : "Show"} Password
          </label>
        </div>
        <Button onClick={handleSubmit} type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Signin;
