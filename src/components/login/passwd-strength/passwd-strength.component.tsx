import { useState } from 'react'
import './passwd-strength.css'
import RequiredText from './required-text/required-text.component';
import StrengthBar from './strength-bar/strength-bar.component';

const PasswdStrength = () => {
    return <div className="passwd-strength">
        <RequiredText className='requirement' text="hey">8 Characters</RequiredText>
        <RequiredText className='requirement' text="hey">Lowercase & Uppercase</RequiredText>
        <p className='requirement'>Special Characters</p>
        <StrengthBar></StrengthBar>
    </div>
}

export default PasswdStrength;
