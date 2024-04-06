import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

export const ReactHookFormExample8 = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Last Name</label>
      <input {...register("lastName")} />
      <button
        type="button"
        onClick={() => {
          setValue("lastName", "luo");
          setValue("firstName", true);
          errors.bill;
        }}
      >
        SetValue
      </button>
    </form>
  );
};
