import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import './login-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

const logGoogleUser = async () => {
    try {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    } catch (error) {
        console.log('UPS!There has been an error:', error)
    }
}

const LoginForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // See if we have authenticatet that user
        try {
            // const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // console.log(user)
            // await createUserDocumentFromAuth(user, { displayName });
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