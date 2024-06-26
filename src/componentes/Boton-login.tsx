import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import Googleicon from "../../public/FlatColorIconsGoogle.svg";

export const BotonLogin = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <button onClick={() => login()}>
      Inciar sesion con Google
      <img src={Googleicon} width={100} height={30} />
    </button>
  );
};
