import './login-form.css'
import { useContext, useState } from 'react';
import useToggle from '../../../hooks/toggle.hook';
import { UserContext } from '../../../contexts/user.context';
import { NotificationContext } from '../../base/notification/notification-container/notification-container.component';
import { addNewUser, getAuthenticated, userExists } from '../../../services/login.utils';
import { NotificationType } from '../../base/notification/notification-body/notification-body.component';
import Input from '../../common/input/input.component';
import Button from '../../common/button/button.component';
import pizzaSketch from '../../../assets/pizza-sketch.png'

const LoginForm = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isRegisterLayout, toggleRegisterLayout] = useToggle(false)
    const { setUser } = useContext(UserContext)
    const { pushNotification } = useContext(NotificationContext)


    const submitHandler = (e: any) => {
        e.preventDefault();

        if (isRegisterLayout) {
            if (!userExists(username)) {
                addNewUser(username, password)
                setUser(username)
                pushNotification(NotificationType.Success, `You have created a new account`)
                return
            }
            pushNotification(NotificationType.Failed, `Username is already in use`)
        } else {
            const user = getAuthenticated(username, password)
            if (user == null) {
                pushNotification(NotificationType.Failed, `Wrong username or password`)
                return
            }
            setUser(user)
            pushNotification(NotificationType.Success, `You have signed in to your account`)
        }
    }

    return <form className="login-form" onSubmit={submitHandler}>
        <img src={pizzaSketch} alt="" />
        <h1>Agent {isRegisterLayout ? `Register` : `Login`}</h1>
        <h2>Hey, Enter your details to {isRegisterLayout ? `sign up a new account` : `sign in to your account`}</h2>
        <div className='content'>
            <Input required={false} onChange={(e: any) => setUsername(e.target.value)} value={username} label='Username' placeholder='john_doe'></Input>
            <Input required={false} onChange={(e: any) => setPassword(e.target.value)} value={password} label='Password' placeholder='********' type={`password`}></Input>
            <p className='align-left'>Forgot Password?</p>
            <Button type={`submit`}>{isRegisterLayout ? `Sign Up` : `Sign In`}</Button>
            {
                isRegisterLayout ?
                    <p>Already have an account <span onClick={() => { toggleRegisterLayout() }}>Sign In</span></p>
                    : <p>Don't have an account? <span onClick={() => { toggleRegisterLayout() }}>Sign Up</span></p>
            }
        </div>
    </form>
}

export default LoginForm;