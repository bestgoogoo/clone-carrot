"use server";

export const handleSubmit = async (preState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("It is completed");
  return {
    errors: ["Wrong password.", "It is too short."],
  };
};
