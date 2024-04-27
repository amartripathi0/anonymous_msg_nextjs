import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2 , "Username should be atleast 2 characters")
    .max(20 , "Username should be atmost 20 characters")

export const signUpSchema = z.object({
    username : usernameValidation ,
    email : z.string().email({message : "Invalid email adress"}),
    password : z.string().min(2 , "password should be atleast 2 characters long")
    
})
