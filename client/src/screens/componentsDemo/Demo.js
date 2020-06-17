import React from "react";
import Form from "../../components/form/Form";
import TextInput from "../../components/form/TextInput";
import SubmitButton from "../../components/form/SubmitButton";
import { useFormInput } from "../../customHooks/useFormInput";

export default function Demo() {
  const nameFormInput = useFormInput("", "name");
  return (
    <div>
      <h1>Form</h1>
      <Form header="My Form">
        <TextInput label="name" useFormInput={nameFormInput} />
        <SubmitButton />
      </Form>
    </div>
  );
}
