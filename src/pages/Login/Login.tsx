import React, {ChangeEvent, useEffect, useState} from 'react';

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
        password: ''
    })
    const [textValidation, setTextValidation] = useState<string>(null)

    useEffect(() => {
        if (form.user.length > 1 && form.user.length < 6) {
            setTextValidation('El usuario debe contener mínimo 6 carácteres')
        } else {
            setTextValidation('')
        }

    }, [form.user]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const logIn = () => {

    }
    return (
        <div className="container">
            <div className="card">
                <p className="title">Iniciar sesión</p>
                <Input
                    name="user"
                    value={form.user}
                    onChange={handleChange}
                    type="text"
                    label="Usuario"
                    classInput="input-class"
                    labelClass="label-class"
                    validateText={textValidation}
                />
                
                <Input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    type="password"
                    label="Contraseña"
                    classInput="input-class"
                    labelClass="label-class"
                    validateText=""
                />

                <div className="footer-buttons">
                    <Button
                        className="right-button"
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