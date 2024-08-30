import {  signInWithGooglePopup, createUserDocumentFromAuth  } from '../../utils/firebase/firebase.utils'

const Login = () => {
    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            const userDocRef =  await createUserDocumentFromAuth(user)
        } catch(error) {
            console.log('UPS!There has been an error:', error)
        }
    }
    return (
    <div className='page-template'>
        <h1>Login</h1>
        <button onClick={ logGoogleUser }>Sign in Google Popup</button>
    </div>
    )
}
export default Login