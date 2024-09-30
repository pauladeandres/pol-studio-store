import Button from '../../components/button/button.component';
import LoginForm from '../../components/login-form/login-form.component';
import { Link } from 'react-router-dom';


const AccountLogin = () => {
    return (
        <div className='page-template account-page'>
            <LoginForm />
            <div className='account-page-block'>
                <h2>Don't have an account yet?</h2>
                <Link to="/signup">
                    <Button text="Register"></Button>
                </Link>
            </div>
        </div>
    )
}
export default AccountLogin