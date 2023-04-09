import { useGoogleLogin } from "@react-oauth/google"
import { useContext, useState } from "react"
import { NotificationContext } from "../components/base/notification/notification-container/notification-container.component"
import { UserContext } from "../contexts/user.context"
import { addNewUser, userExists } from "../services/login.utils"
import useToggle from "./toggle.hook"
import jwt_decode from "jwt-decode";
import { Users } from "../interfaces/user.interface"
import { RequestType, sendRequest } from "../services/general.utils"
import { NotificationType } from "../components/base/notification/notification-body/notification-body.component"

export const useLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const { user, setUser } = useContext(UserContext);
  const { pushNotification } = useContext(NotificationContext)

  const [googleUser, setGoogleUser] = useState<Users.IGoogleUser | null>(null);
  const [isRegisterLayout, toggleRegisterLayout] = useToggle(false)

  const toggleLayout = () => {
    setEmail(``);
    setPassword(``);
    setConfirmPassword(``);
    setGoogleUser(null);
    toggleRegisterLayout();
  }

  const signIn = useGoogleLogin({
    onSuccess: async (res) => {
      const { access_token } = res;
      if (isRegisterLayout) {
        const { email } = await (await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + res.access_token)).json();
        setGoogleUser({ email, access_token });
        setEmail(email);
      } else {
        const authRes = await sendRequest("user/auth", RequestType.POST, { access_token });
      }
    },
    onError: (err) => {
      console.log(`Error: `, err);
    },
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegisterLayout) {
      if (!email || !password || !confirmPassword || !googleUser?.access_token || (password != confirmPassword)) {
        pushNotification(NotificationType.Failed, `Please fill all the fields`)
        return;
      }
      const authRes = await sendRequest("user/new", RequestType.POST, { access_token: googleUser.access_token, password });
      console.log(authRes)
    } else {
      if (!email || !password) return;
      const authRes = await sendRequest("user/auth", RequestType.POST, { access_token: googleUser?.access_token, email, password });
      if (authRes.status == 401) {
        console.log(`Unauthorized`);
        return;
      }
      setUser({ token: (await authRes.json()).token });
    }
  }

  return {
    inputs: {
      email, setEmail,
      password, setPassword,
      confirmPassword, setConfirmPassword,
    },
    others: {
      isRegisterLayout, toggleLayout,
      signIn,
      googleUser,
      setGoogleUser,
      submitHandler,
    }
  }
}