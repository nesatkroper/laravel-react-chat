import React, { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import axios from "@/config/axios";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";

const Signin = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response: void | AxiosResponse = await axios
      .post("/login", {
        username: username,
        password: password,
      })
      .catch((err) => {
        console.error(err);
        return;
      });

    if (response.data.status) {
      localStorage.setItem("token", response.data.token);
    }
  };
  // const handleNavigate = () => {
  //   navigate("/");
  // };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Password"
            required
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
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Signin;
