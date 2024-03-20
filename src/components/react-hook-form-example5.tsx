import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Input from "@mui/material/Input";

interface IFormInput {
  firstName: string;
  lastName: string;
  Age: number;
  iceCreamType: { label: string; value: string };
}

export const ReactHookFormExample5 = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      Age: 0,
      iceCreamType: { label: "", value: "" },
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};
