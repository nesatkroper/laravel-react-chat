import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Paperclip, SendHorizonal, Smile } from "lucide-react";

const ContentSender = () => {
  const [msg, setMsg] = useState("");
  const [type, setType] = useState(false);

  // if (msg !== "") setType(true);
  // else setType(false);

  const openDialog = () => {
    document.getElementById("selectFile")?.click();
  };
  return (
    <React.Fragment>
      <Card className="absolute bottom-[60px] ">
        <CardContent className="p-1 flex">
          <Input type="file" id="selectFile" className="hidden" />
          <Button
            onClick={openDialog}
            className="bg-background text-dark hover:bg-gray-100 px-2 me-2"
          >
            <Paperclip />
          </Button>
          <Input
            onChange={(e) => setMsg(e.target.value)}
            className="min-w-[350px] border-none"
            placeholder="White a message..."
          />

          <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2">
            {type ? <SendHorizonal /> : <Smile />}
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ContentSender;
