import "./login.css";

import { useContext } from "react";
import LoginForm from "../../components/login/login-form/login-form.component";
import { UserContext } from "../../contexts/user.context";
import ShowTimer from "../../components/base/show-timer/show-timer.component";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    if (user != null) navigate(`/home`)
    return (
        <ShowTimer timeout={0}>
            <div className="login-page">
                <LoginForm></LoginForm>
                {/* {user == null ? <LoginForm></LoginForm> : <Navigate to="/home" replace />} */}
            </div>
        </ShowTimer>
    );
};

export default LoginPage;