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
import { ValidValidation } from "../../lib/validation";
import { Link } from "react-router-dom";
import LogoSvg from "/assets/images/logo.png";
import { useState } from "react";

// import { Auth } from 'aws-amplify'

const ValidationForm = () => {
  const isLoading = false;
  const form = useForm<z.infer<typeof ValidValidation>>({
    resolver: zodResolver(ValidValidation),
    defaultValues: {
      username: "",
      authorizationCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof ValidValidation>) {
    console.log(values);
  }

  const { setValue } = form;
  const [username, setUsername] = useState("");
  const [authorizationCode, setAuthorizationCode] = useState("");

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("username", e.target.value);
    setUsername(e.target.value);
  };

  const handleAuthorizationCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("authorizationCode", e.target.value);
    setAuthorizationCode(e.target.value);
  };

  const handleValidate = () => {
    console.log("handleValidate");
    console.log(username);
    console.log(authorizationCode);
  };

//   const handleValidate = async () => {
//     try {
//         console.log("handleValidate");
//         console.log(username);
//         console.log(authorizationCode);

//         await Auth.confirmSignUp(username, authorizationCode)
//         console.log('Success!')
//     } catch (err) {
//         console.log(err)
//     }
//   }

  return (
    <Form {...form}>
      <div className="sm:w-380 flex-center flex-col">
        <img src={LogoSvg} alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">We Emailed You</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          Your code is on the way.
        </p>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To log in, enter the code we emailed.
        </p>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          It may take a minute to arrive.
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
            name="authorizationCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Authorization Code</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="shad-input"
                    {...field}
                    value={authorizationCode}
                    onChange={handleAuthorizationCode}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="shad-button_primary"
            onClick={handleValidate}
          >
            {isLoading ? (
              <div className="flex-center gap-2">Loading...</div>
            ) : (
              "Validate"
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

export default ValidationForm;
