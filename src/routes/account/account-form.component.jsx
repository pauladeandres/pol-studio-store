import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import SignupForm from '../../components/signup-form/signup-form.component';

const AccountForm = () => {
    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            const userDocRef = await createUserDocumentFromAuth(user)
        } catch (error) {
            console.log('UPS!There has been an error:', error)
        }
    }
    return (
        <div className='page-template account-page'>
            <SignupForm />
            <div>
                <h2>Sign Up with Google</h2>
                <button onClick={logGoogleUser}>Open Google Popup</button>
            </div>
        </div>
    )
}
export default AccountForm