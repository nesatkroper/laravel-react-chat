import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import axios from "@/config/axios";

const Signin = () => {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });
  // const [msg, setMsg] = useState("");
  // const [load, setLoad] = useState(false);

  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(auth);
    // await axios.post("/add", {
    //   username: user.username,
    //   password: user.password,
    // });
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type={show ? "text" : "password"}
            name="password"
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
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Signin;
