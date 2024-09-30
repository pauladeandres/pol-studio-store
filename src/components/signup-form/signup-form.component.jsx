import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignupForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Confirm password matches
        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }
        // See if we have authenticatet that user
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user)
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields()
        } catch (error) {
            console.log('CODE:', error.code)
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log('An error occured', error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="account-page-block">
            <h2>Sign Up with your email and password</h2>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}>
                </FormInput>
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
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}>
                </FormInput>
                <Button type="submit" text="Sign Up"></Button>
            </form>
        </div>
    )
}

export default SignupForm