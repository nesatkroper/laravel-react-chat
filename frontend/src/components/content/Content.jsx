import React from "react";
import ContentHeader from "./ContentHeader";
import ContentBody from "./ContentBody";
import ContentSender from "./ContentSender";

const Content = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col w-full h-full">
        {/*  */}
        <ContentHeader />
        <div className="p-2">
          {/*  */}
          <ContentBody />
          {/*  */}
          <ContentSender />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
