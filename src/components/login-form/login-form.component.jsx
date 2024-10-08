import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signinAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import './login-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

const LoginForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const logGoogleUser = async () => {
    try {
        await signInWithGooglePopup();
    } catch (error) {
        console.log('UPS!There has been an error:', error)
    }
}

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // See if we have authenticatet that user
        try {
            const { user } = await signinAuthUserWithEmailAndPassword(email, password);
            resetFormFields()
        } catch (error) {
            console.log('CODE:', error.code)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="account-page-block">
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}>
                </FormInput>
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}>
                </FormInput>

                <div className="login-buttons-container">
                    <Button type="submit" text="Sign In"></Button>
                    <Button onClick={logGoogleUser} text="Sign in with Google"></Button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm