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
import { useLogin } from '../../../hooks/login.hook';
import { GoogleLogin, useGoogleLogin, UseGoogleLoginOptions } from '@react-oauth/google';
import { useLocation } from 'react-router';
import googleLogo from '../../../assets/google-logo.png';
import DoubleIcon from '../../common/double-icon/double-icon.component';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCertificate, faCheck } from '@fortawesome/free-solid-svg-icons';



const LoginForm = () => {
    const { inputs, others } = useLogin();

    return <form className="login-form" onSubmit={others.submitHandler}>
        <img className='login-drawing' src={pizzaSketch} alt="" />
        {others.isRegisterLayout ? <>
            <h1>Agent {`Register`}</h1>
            <h2>Hey, Enter your details to sign up a new account</h2>
            <div className='content'>
                <div className='verify-container'>
                    <Input disabled={others.googleUser} required={true} onChange={(e: any) => inputs.setEmail(e.target.value)} value={inputs.email} label='Email' placeholder='john@example.com'></Input>
                    <button onClick={() => { !others.googleUser && others.signIn() }} type='button' className={`verify-button${others.googleUser ? ` verified` : ``}`}>
                        <DoubleIcon defaultIcon={faGoogle} activeIcon={faCheck} active={others.googleUser != null}></DoubleIcon>
                        Verify
                    </button>
                </div>
                <Input required={true} onChange={(e: any) => inputs.setPassword(e.target.value)} value={inputs.password} label='Password' placeholder='********' type={`password`}></Input>
                <Input required={true} onChange={(e: any) => inputs.setConfirmPassword(e.target.value)} value={inputs.confirmPassword} label='Confirm Password' placeholder='********' type={`password`}></Input>
                <Button className='submit-button' type={`submit`}>Sign Up</Button>
                <p>Already have an account <span onClick={() => { others.toggleLayout() }}>Sign In</span></p>
            </div>
        </> : <>
            <h1>Agent Login</h1>
            <h2>Hey, Enter your details to sign in to your account</h2>
            <div className='content'>
                <Input required={true} onChange={(e: any) => inputs.setEmail(e.target.value)} value={inputs.email} label='Email' placeholder='john@example.com'></Input>
                <Input required={true} onChange={(e: any) => inputs.setPassword(e.target.value)} value={inputs.password} label='Password' placeholder='********' type={`password`}></Input>
                <p className='align-left'>Forgot Password?</p>
                <Button className='submit-button' type={`submit`}>Sign In</Button>
                <p>Already have an account <span onClick={() => { others.toggleLayout() }}>Sign In</span></p>
            </div>
        </>}
    </form>
}

export default LoginForm;