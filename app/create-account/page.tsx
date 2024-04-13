import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2>Nice to meet you!</h2>
        <h3>Fill in the form below to join!</h3>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="bg-transparent rounded-md w-full h-10 ring-1 focus:ring-2 border-none ring-neutral-200 focus:ring-orange-400 placeholder:text-neutral-400"
            type="text"
            placeholder="Username"
          />
          <span className="text-red-500">Input error</span>
        </div>
        <button className="primary-btn h-10">Create Account</button>
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="primary-btn flex items-center justify-center gap-2 h-10"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
