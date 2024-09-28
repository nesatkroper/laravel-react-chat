import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axiosInstance from "@/config/axios";
import { useNavigate } from "react-router-dom";
import Auth from "../Auth";

interface Auth {
  name: string;
  gender: string;
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [auth, setAuth] = useState(Auth);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuth({ ...auth, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/register", auth);
      console.log(response.data);
      if (response.data.status) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowPassword = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="name">Name*</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            name="name"
            placeholder="Jonh Cena"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="gender">Gender*</Label>
          <RadioGroup
            onValueChange={(value) =>
              handleChange({ target: { name: "gender", value } })
            }
            name="gender"
            defaultValue="male"
            className="flex flex-row"
            required
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="username">Username*</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            name="username"
            placeholder="@jonhcena"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="email">Email*</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="email"
            name="email"
            placeholder="jonhcena@example.com"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label htmlFor="password">Password*</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
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
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Signup;
