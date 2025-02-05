"use client"

import { registerFormSchema } from '@/schemas/schemas'
import { IRegisterFormData } from '@/types/types'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function RegisterForm() {
    //joining useform and the zodresolver
    const {
        register,
         handleSubmit,
          reset,
         formState: { errors }}
          = useForm<IRegisterFormData>({
            resolver: zodResolver(registerFormSchema),
})

async function handleRegister(data : IRegisterFormData) {
    console.log(data)
    reset()
}
  return (
        <form className="space-y-6" onSubmit={handleSubmit(handleRegister)}>
        <h5 className="text-xl
            flex justify-center items-center font-semibold  dark:text-white">
          Sign in to our platform
          </h5>
        <div>
            <label htmlFor="username"
             className="block mb-2
              text-sm font-medium text-gray-900
               dark:text-white">
                Username</label>
            <input {...register("username")} type="text" 
            name="username" id="username" 
            className="bg-gray-50 border
             border-gray-300 text-gray-900
              text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full
                p-2.5 dark:bg-gray-600
                 dark:border-gray-500
                  dark:placeholder-gray-400
                   dark:text-white" 
                   placeholder="Brian" 
                    />
                    {errors.username && (
                        <p className='text-red-400 mt-2 text-sm'>
                            {errors.username.message}
                        </p>
                    )}
        </div>
        <div>
            <label htmlFor="email"
             className="block mb-2
              text-sm font-medium text-gray-900
               dark:text-white">
                Your email</label>
            <input {...register("email")} type="email" 
            name="email" id="email" 
            className="bg-gray-50 border
             border-gray-300 text-gray-900
              text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full
                p-2.5 dark:bg-gray-600
                 dark:border-gray-500
                  dark:placeholder-gray-400
                   dark:text-white" 
                   placeholder="dunruly95@gmail.com" 
                   required />
                   {errors.email && (
                        <p className='text-red-500 mt-2 text-sm'>
                            {errors.email.message}
                        </p>
                    )}
        </div>
        <div>
            <label htmlFor="password" 
            className="block mb-2 text-sm
             font-medium text-gray-900
              dark:text-white">
                Your password
                </label>
            <input {...register("password")} type="password"
             name="password" id="password"
              placeholder="**************" className="bg-gray-50
              border border-gray-300 text-gray-900
               text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full
                 p-2.5 dark:bg-gray-600 dark:border-gray-500
                  dark:placeholder-gray-400 dark:text-white"
                    />
                    {errors.password && (
                        <p className='text-red-500 mt-2 text-sm'>
                            {errors.password.message}
                        </p>
                    )}
        </div>
        
        <button type="submit" className="w-full
         text-white bg-blue-700 hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
           font-medium rounded-lg text-sm px-5
            py-2.5 text-center dark:bg-blue-600
             dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Create Account</button>
        
    </form>

  )
}
