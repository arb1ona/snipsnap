"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignUp, useUser } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
