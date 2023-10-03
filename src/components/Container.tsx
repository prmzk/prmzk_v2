import React, { type ReactNode } from "react";

const Container: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
