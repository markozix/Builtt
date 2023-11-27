import React, {useRef} from "react";
import { Container } from '@mui/material';
import './Login.scss';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LOGIN_EMAIL, LOGIN_PASSWORD } from "../../globals";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleLogin = () => {
       if (emailRef.current.value === LOGIN_EMAIL && passwordRef.current.value === LOGIN_PASSWORD) {
           navigate("/shop");
       }
    }
    return (
        <Container className='LoginForm'>
            <h3>Prijavi se na svoj nalog</h3>
            <TextField id="email" label="Email" variant="standard" inputRef={emailRef} /> <br />
            <TextField type="password" id="password" label="Password" variant="standard" inputRef={passwordRef} />
            <Button className="LoginButton" variant="contained" onClick={handleLogin}>Prijavi se na nalog</Button>
        </Container>
    )
}

export default Login