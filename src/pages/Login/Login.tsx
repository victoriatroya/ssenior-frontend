import React, {ChangeEvent, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import "./Login.scss";

interface FormState {
    user: string;
    password: string;
}

const Login = () => {
    const [form, setForm] = useState<FormState>({
        user: '',
        password: '',
    })

    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const logIn = () => {
        navigate('/fruits')
    }

    return (
        <div className="container-login">
            <div className="container-login__card">
                <p className="title">Iniciar sesión</p>
                <Input
                    name="user"
                    value={form.user}
                    onChange={handleChange}
                    type="text"
                    label="Usuario"
                    classInput="input-class"
                    labelClass="label-class"
                    idTest="input-text"
                />

                <Input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    type="password"
                    label="Contraseña"
                    classInput="input-class"
                    labelClass="label-class"
                    idTest="input-password"
                />

                <div className="footer-buttons">
                    <Button
                        classButon="right-button"
                        onClick={logIn}
                        text="Ingresar"
                        textClass="text-class"
                        disabled={!(form.password && form.user)}
                    />
                </div>
            </div>
        </div>

    );
};

export default Login;