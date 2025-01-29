import { z } from 'zod';

export const registerFormSchema = z.object({
    //validation rules for each form field
    username : z.string({
        required_error: "Username is required!"
    }).min(3, {
        message : "Username must be at least 3 characters long!"
    }).max(20, {
        message : "Username can not exceed 20 characters!"
    }),
    email: z.string({
        required_error : "Email is required!"
    }).endsWith(".com",{
        message: "Email must end with .com!"
    }),
    password: z.string({
        required_error: "Password is required!"
    }).min(6,{
        message : "Password must be at least 6 characters long!"
    })
})