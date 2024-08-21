import React from 'react'
import { useForm } from "react-hook-form";
import InputField from '../../components/Form/InputField';
import Button from '../../components/Form/Button';
import Label from '../../components/Form/Label';

export default function Add() {
    const { 
        register, handleSubmit, watch, formState: { errors } 
    } = useForm({
    defaultValues:{
        idno: '',
        firstname: '',
        lastname: '',
        image: '',
        username: '',
        password: ''
    }
    });
    
    const onSubmit = data => console.log(data.idno);
    const firstname = watch('firstname');
    const lastname = watch('lastname');
    console.log('fname: ', firstname, 'lastname: ',lastname)

  return (
    <div>
        <main>
            <div className="mx-auto max-w-8xl px-4 py-6 sm:px-6 lg:px-8 bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 h-full">
                    <div className="bg-inherit p-4 h-full">
                        <div className='font-mono font-semibold'>
                            <h1 className="text-center text-3xl font-semibold font-mono">Add Students</h1>
                            <div className="w-1/2 p-4 mx-auto">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="p-4">
                                        <Label htmlFor='idno' text='Student ID' />
                                        <InputField
                                        type="number"
                                        placeholder="ID Number"
                                        name="idno"
                                        register={register}
                                        validation={{ 
                                            required: 'ID Number is required', maxLength: 7,
                                            minLength: { 
                                                value: 7,
                                                message: 'Minimun length is 7' 
                                            }
                                        }}
                                        />
                                        <p className="text-red-500">{errors.idno?.message}</p>
                                    </div>
                                    <div className="p-4">
                                        <Label htmlFor='firstname' text='Firstname' />
                                        <InputField
                                        type="text"
                                        placeholder="Firstname"
                                        name="firstname"
                                        register={register}
                                        validation={{ required: 'Firstname is required' }}
                                        />
                                        <p className="text-red-500">{errors.firstname?.message}</p>
                                    </div>
                                    <div className="p-4">
                                        <Label htmlFor='lastname' text='Lastname' />
                                        <InputField
                                        type="text"
                                        placeholder="Lastname"
                                        name="lastname"
                                        register={register}
                                        validation={{ required: 'Lastname is required' }}
                                        />
                                        <p className="text-red-500">{errors.lastname?.message}</p>
                                    </div>
                                    <div className="p-4">
                                        <div class="col-span-full">
                                            <Label htmlFor='image' text='Cover Image' />
                                            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                <div class="text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                                </svg>
                                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <Label htmlFor="username" text="Username" />
                                            <InputField
                                            type="text"
                                            placeholder="Username"
                                            name="username"
                                            register={register}
                                            validation={{ required: 'Username is required' }}
                                        />
                                        <p className="text-red-500">{errors.username?.message}</p>
                                    </div>
                                    <div className="p-4">
                                        <Label htmlFor="password" text="Password" />
                                            <InputField
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            register={register}
                                            validation={{ required: 'Password is required' }}
                                        />
                                        <p className="text-red-500">{errors.password?.message}</p>
                                    </div>
                                    <div className="p-4">
                                        <Button type="submit" text='Save Student' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
