import React from "react";
import {useForm, useFieldArray} from "react-hook-form";

function FieldArray({ register, control }) {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "users", // unique name for your Field Array
  });
  return (
    <>
      {
        fields.map((field, index) => (
          <div key={field.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <label htmlFor='fullName'>FullName</label>
            <input defaultValue={field.fullName} {...register(`users[${index}].fullName`)} type='text'
                   placeholder='name...'/>
            <label htmlFor='email'>Email</label>
            <input defaultValue={field.email} {...register(`users[${index}].email`)} type='email'
                   placeholder='email...'/>
            <label htmlFor='number'>Number</label>
            <input defaultValue={field.number}  {...register(`users[${index}].number`)} type='number'
                   placeholder='number...'/>
            <button onClick={()=>remove(index)}>delete</button>
          </div>
        ))
      }
      <button onClick={() => append({ fullName: "", email: "", number: "" })}>Add user</button>
    </>
  );
}

const UsersArray = () => {
  const { control, register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldArray control={control} register={register}/>
        <button type='submit' style={{ marginTop: "5px" }}>Submit</button>
      </form>
    </>
  )
}

export default UsersArray;
