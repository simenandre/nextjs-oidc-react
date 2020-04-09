import React from "react";
import { AuthProvider } from "oidc-react";

const oidcConfig = {
  onSignIn: async (user: any) => {
    console.log(user);
    window.location.hash = "";
  },
  authority: "https://accounts.google.com",
  clientId:
    "1066073673387-undfdseanu1soilcdprq1p4m8gq8a1iu.apps.googleusercontent.com",
  responseType: "id_token",
  scope: "openid profile",
  autoSignIn: false,
  redirectUri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://cobraz.github.io/example-oidc-react",
};

const Auth = ({children}) => {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
};

export default Auth;
