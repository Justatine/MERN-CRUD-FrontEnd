import React from 'react'
import { useForm } from "react-hook-form";
import InputField from '../../components/Form/InputField';
import Button from '../../components/Form/Button';
import Label from '../../components/Form/Label';

export default function LoginPage() {
  const { 
    register, handleSubmit, watch, formState: { errors } 
  } = useForm({
    defaultValues:{
      username: '',
      password: ''
    }
  });
  
  const onSubmit = data => console.log(data);
  const username = watch('username');
  const password = watch('password');

  return (
    <div>
      <main>
        <div className="mx-auto max-w-8xl px-4 py-6 sm:px-6 lg:px-8 bg-slate-50 h-[80vh]">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 h-full">
            <div className="bg-inherit p-4 h-full">
                <div className='font-mono font-semibold'>
                    <h1 className="text-center text-3xl font-semibold font-mono">Login Page</h1>
                    <div class="w-1/2 p-4 mx-auto">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-5'>
                            {/* <InputField type='text' placeholder="Username" name={username} {...register("username", { required: "Usernames is required" })} /> */}

                            <Label htmlFor={username} text='Username' />
                            <InputField
                              type="text"
                              placeholder="Username"
                              name="username"
                              register={register}
                              validation={{ required: 'Username is required' }}
                            />
                            <p className="text-red-500">{errors.username?.message}</p>
                        </div>
                        
                        <div className='mt-5'>
                          <Label htmlFor={password} text="Password" />
                            <InputField
                              type="password"
                              placeholder="Password"
                              name="password"
                              register={register}
                              validation={{ required: 'Password is required' }}
                          />
                          <p className="text-red-500">{errors.password?.message}</p>
                        </div>

                        <div className='mt-5 flex justify-center'>
                          <Button type='submit' text='Submit' />
                        </div>
                      </form>
                      <p>No account yet? <a href="/signup">Create account</a></p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
