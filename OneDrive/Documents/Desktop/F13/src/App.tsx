import { Routes, Route } from "react-router-dom";
import "./globals.css";
import Home from "./_land/initial/Home";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import ValidationForm from "./_auth/forms/ValidationForm";
import LandLayout from "./_land/LandLayout";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import {
  Dashboard,
  Chat,
  Post,
  UpdatePost,
  Profile,
  UpdateProfile,
  Others,
} from "./_root/pages";

import { Amplify } from "aws-amplify";
import { Authenticator, View, Image, useTheme } from "@aws-amplify/ui-react";
import awsExports from './aws-exports.js'
import LogoSvg from "/assets/images/logo.png";

Amplify.configure(awsExports);

const App = () => {
  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image alt="logo" src={LogoSvg} />
        </View>
      );
    },
  };



  return (
    <main className="flex h-screen">
      <Authenticator loginMechanisms={["email"]} components={components}>
        {({ signOut }) => (
          <Routes>
            <Route element={<LandLayout />}>
              <Route path="*" element={<Home />} />
              <Route path="/" index element={<Home />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/signin" element={<SigninForm />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/validate" element={<ValidationForm />} />
            </Route>

            <Route element={<RootLayout logOut={signOut} />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/post" element={<Post />} />
              <Route path="/updt-post/:id" element={<UpdatePost />} />
              <Route path="/postdets/:id" element={<UpdatePost />} />
              <Route path="/profile/:id/*" element={<Profile />} />
              <Route path="/updt-profile/:id" element={<UpdateProfile />} />
              <Route path="/others" element={<Others />} />
            </Route>
          </Routes>
        )}
      </Authenticator>
    </main>
  );
};

export default App;

