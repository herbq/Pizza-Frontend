import React from 'react';
import './input.css';

interface IProps {
    label: string;
    required?: boolean;
    [key: string]: any;
}

const Input = ({ label, required, ...props }: IProps) => {

    return (
        <div className="input-group">
            {
                label ? (
                    <label>
                        <span>{label}</span>
                        &nbsp;
                        {required && <span>*</span>}
                    </label>
                ) : null
            }
            <input {...props} />
        </div>
    );
};

export default Input;
