import { z } from "zod";
import { Button } from "../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { useForm } from "react-hook-form";
import { SigninValidation } from "../../lib/validation";
import { Link } from "react-router-dom";
import LogoSvg from "/assets/images/logo.png";
import { useState } from "react";

// import { Auth } from "aws-amplify";

const SigninForm = () => {
  const isLoading = false;
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SigninValidation>) {
    console.log(values);
  }

  const { setValue } = form;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("username", e.target.value);
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("password", e.target.value);
    setPassword(e.target.value);
  };

  const handleSignin = () => {
    console.log("handleSignin");
    console.log(username);
    console.log(password);
  };

  // const handleSignin = async () => {
  //   try {
  //     console.log("handleSignin");
  //     console.log(username);
  //     console.log(password);

  //     await Auth.signIn(username, password)
  //     console.log('Login success')
  //   }  catch (err) { 
  //     console.log(err) 
  //   }
  // };

  return (
    <Form {...form}>
      <div className="sm:w-380 flex-center flex-col">
        <img src={LogoSvg} alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Sign in to account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use F13hob, Please enter your details
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="shad-input"
                    {...field}
                    value={username}
                    onChange={handleUsername}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="shad-input"
                    {...field}
                    value={password}
                    onChange={handlePassword}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="shad-button_primary"
            onClick={handleSignin}
          >
            {isLoading ? (
              <div className="flex-center gap-2">Loading...</div>
            ) : (
              "Log In"
            )}
          </Button>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Don&apos;t have an account?
            <Link
              to="/signup"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
