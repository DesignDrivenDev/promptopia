import "@/styles/globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
export const metadata: Metadata = {
  title: "Promptopia",
  description: "Discover & share AI Prompts",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {/* @ts-ignore */}
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
