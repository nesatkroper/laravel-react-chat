import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchContact } from "@/app/contact/contactSlice";
import { useSelector, useDispatch } from "react-redux";

const ContactList = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.contact?.data);
  console.log(store);
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <React.Fragment>
      <ScrollArea className="h-[86vh] w-full rounded-md p-1">
        {store?.map((contact) => (
          <Card className="mt-1" key={contact.con_id}>
            <CardContent className="p-2">
              <div className="flex">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ms-2 font-bold">
                  <p>{contact.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </React.Fragment>
  );
};

export default ContactList;
