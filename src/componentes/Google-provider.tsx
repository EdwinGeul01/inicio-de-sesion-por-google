import { GoogleOAuthProvider } from "@react-oauth/google";
import { BotonLogin } from "./Boton-login";

export const GoogleLoginTap = () => {
  return (
    <GoogleOAuthProvider clientId="1011054218357-230h61ns5kkfhgk3fbdgr9mq6sgrrnvd.apps.googleusercontent.com">
      <BotonLogin />
    </GoogleOAuthProvider>
  );
};
