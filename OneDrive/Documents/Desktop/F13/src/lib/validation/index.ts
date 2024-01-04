import * as z from "zod";

export const SignupValidation = z.object ({
    name: z.string().min(2,{message:'Too short'}),
    username: z.string().min(2,{message: 'Too short'}),
    email: z.string().email(),
    password: z.string().min(8,{message: 'Password must be 8 characters'}),
})

export const SigninValidation = z.object ({
    username: z.string().min(2,{message: 'Too short'}),
    password: z.string().min(8,{message: 'Password must be 8 characters'}),
})

export const ValidValidation = z.object ({
  username: z.string().min(2,{message: 'Too short'}),
  authorizationCode: z.string().refine((value) => /^\d{6}$/.test(value), {message: 'Autorization code must be a 6-digit number'}),
})

export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
  });
 
export const PostValidation = z.object({
    file: z.custom<File[]>(),
    caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
    tags: z.string(),
  });