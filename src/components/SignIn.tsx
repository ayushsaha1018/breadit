import { FC } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignIn: FC = () => {
  return (
    <div className="container mx-auto w-full flex flex-col justify-center items-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto size-6" />
        <h1 className="text-2xl font-semibold tracking-light">Welcome Back!</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Breadit account and agree to our
          user agreement and privact policy
        </p>
      </div>

      {/* sign in form  */}
      <UserAuthForm />
      <p className="px-8 text-center text-zinc-700 text-sm">
        New to BreadIt?{" "}
        <Link
          href="/sign-up"
          className="hover:text-zinc-800 text-sm underline underline-offset-4"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
