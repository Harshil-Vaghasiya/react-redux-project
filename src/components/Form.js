import React from "react";
import {useForm} from "react-hook-form";
import classNames from 'classnames';

const Form = () => {
  const { register, handleSubmit, getValues, formState: { errors },reset } = useForm({
    mode: 'onSubmit'
  });

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <label htmlFor='fullName'>FullName</label>
        <input style={errors.fullName ? {
          border: "2px red solid",
          outline: 'none',
          borderRadius: '5px'
        } : {}} {...register('fullName', {
          required: 'this field required',
          minLength: { value: 3, message: "name must have minimum 3 characters" }
        })} type='text' placeholder='name...'/>
        {errors.fullName && <span style={{ color: "red" }}>{errors.fullName.message}</span>}
        {/*{errors.fullName?.type === "minLength" &&*/}
        {/*<span style={{ color: "red" }}>name must have minimum 3 characters</span>}*/}
        <label htmlFor='email'>Email</label>
        <input {...register('email', {
          required: "this field in required",
          pattern: { value: /^[a-z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, message: "please enter valid email!" }
        })} type='email' placeholder='email...'/>
        {errors.email && <span style={{ color: "red" }}>{errors.email?.message}</span>}
        <label htmlFor='number'>Number</label>
        <input {...register('number', { required: true })} type='number' placeholder='number...'/>
        {/*<label htmlFor='number'>Backup Number</label>*/}
        {/*<input {...register('number[1]',{required:true,minLength:10})} type='number' placeholder='number...'/>*/}
        <label htmlFor='password'>Password</label>
        <input {...register('password', { required: true })} type='password' name='password' placeholder='password...'/>
        <label htmlFor='confirm_password'>Confirm Password</label>
        <input {...register('confirm_password', {
          required: "this field required",
          validate: value => value === getValues("password") || "password does not match"
        })}
               type='password' name='confirm_password' placeholder='confirm password...'/>
        {errors.confirm_password && <span style={{ color: "red" }}>{errors.confirm_password?.message}</span>}
        <input {...register('gender', { required: true })} type="radio" value="male"/>
        <label htmlFor="vehicle1"> male</label>
        <input {...register('gender', { required: true })} type="radio" value="female"/>
        <label htmlFor="vehicle2"> female</label>
        <input {...register('gender', { required: true })} type="radio" value="other"/>
        <label htmlFor="vehicle3"> other</label>
        {errors.gender?.type === "required" && <span style={{ color: "red" }}>This field is required</span>}
        <select className="custom-select" {...register('state', { required: "this field is required" })} >
          <option value=''>Select your state</option>
          <option value="Delhi">Delhi</option>
          <option value="Punjab">Punjab</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Bihar">Bihar</option>
        </select>
        {errors.state && <span style={{ color: "red" }}>{errors.state.message}</span>}
        {/*<label htmlFor='city'>City</label>*/}
        {/*<input {...register('address.city')} type='text' placeholder='city...'/>*/}
        {/*<label htmlFor='state'>State</label>*/}
        {/*<input {...register('address.state')} type='text' placeholder='state...'/>*/}
        {/*<label htmlFor='zipcode'>Zipcode</label>*/}
        {/*<input {...register('address.zipcode')} type='number' placeholder='zipcode...'/>*/}
        <div>
          <input {...register('tnc', { required: true })} type="checkbox" id="terms" value="agree"/>
          <label htmlFor="terms">I agree all terms and conditions</label>
        </div>
        <button type='submit' style={{ marginTop: "5px" }}>Submit</button>
      </form>
    </>
  )
}

export default Form;