import { InputHTMLAttributes } from "react";

interface IInputProps {
  name: string;
  errors?: string[];
}

function Input({
  name,
  errors = [],
  ...rest
}: IInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 ring-1 focus:ring-4 border-none ring-neutral-200 transition focus:ring-orange-400 placeholder:text-neutral-400"
        name={name}
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}

export default Input;
