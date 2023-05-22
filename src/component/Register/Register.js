import React from 'react';
import { Container } from 'react-bootstrap';
import './Register.css'

const Register = () => {
    return (
        <Container>
            <h2>This is Register page</h2>
            <form action="">
                <input type="text" placeholder='Your name' />
                <br />
                <input type="emial" placeholder='Your email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <input type="submit" />
            </form>
        </Container>
    );
};

export default Register;