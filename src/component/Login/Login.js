import React from 'react';
import { Button, Container } from 'react-bootstrap';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {signWithGoogl} = useFirebase();
    return (
        <Container>
            <h2>This is Login page</h2>
            <Button onClick={signWithGoogl} style={{"margin-bottom": "20px"}}>Google Sign in</Button>
            <form action="">
                <br />
                <input type="emial" placeholder='Your email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <input style={{"margin-top": "20px"}} type="submit" value={"Login"} />
            </form>
        </Container>
    );
};

export default Login;