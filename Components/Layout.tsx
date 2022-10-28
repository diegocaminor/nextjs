import React from "react";
import Navbar from "./Navbar";

interface ILayout {
  children: JSX.Element;
}

const Layout: React.FC = ({ children }: ILayout) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  );
};

export default Layout;
