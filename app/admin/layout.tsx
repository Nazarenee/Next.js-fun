import React, { ReactNode } from "react";
import NavBar from "../NavBar";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 mr-5">Admin Sidebar</aside>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
