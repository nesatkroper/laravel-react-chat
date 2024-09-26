import { Layout } from "@/components/app/Layout";
import Contact from "@/components/contact/Contact";
import Content from "@/components/content/Content";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Layout>
        {" "}
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            defaultSize={25}
            className="h-[100vh] min-w-[220px] p-2"
          >
            <Contact />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel className="h-[100vh] min-w-[470px]">
            <Content />
          </ResizablePanel>
        </ResizablePanelGroup>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
