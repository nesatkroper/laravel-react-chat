import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { LogInIcon } from "lucide-react";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleChange = () => {};

  return (
    <React.Fragment>
      <form>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="gender">Gender</Label>
          <RadioGroup defaultValue="male" className="flex flex-row">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="Female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" placeholder="Username" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type={show ? "text" : "password"}
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label htmlFor="c_password">Confirm Password</Label>
          <Input
            type={show ? "text" : "password"}
            id="c_password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox onCheckedChange={handleShowPassword} id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {show ? "Hide" : "Show"} Password
          </label>
        </div>
        <Button className="w-full">
          {/* <LogInIcon className="float-left" /> */}
          Sign Up
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Signup;
