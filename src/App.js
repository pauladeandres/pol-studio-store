import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import NavBar from "./routes/navigation/navigation.components";
import Cart from "./routes/cart/cart.component";
import AccountSignUp from "./routes/account/account-signup.component";
import AccountLogin from "./routes/account/account-login.component";

const Shop = () => {
    return <h1>I am the SHOP</h1>
}

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<NavBar />} >
                <Route index element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='about' element={<About />} />
                <Route path='login' element={<AccountLogin />} />
                <Route path='signup' element={<AccountSignUp />} />
                <Route path='cart' element={<Cart />} />
            </Route>
        </Routes>
    );
}

export default App;