import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full h-full flex-col">
      <main className="flex w-full h-full flex-1">{children}</main>
    </div>
  );
};

export default AuthLayout;
