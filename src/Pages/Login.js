import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginForm, LoginBackground } from '../Styles/General.styles';
import useAuth from '../Hooks/useAuth';
import { PrincipalUserData } from "../Data/UserData";
import { IsValidUser } from '../Services/Service';

export default function Login() {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const { login } = useAuth();

    const loginHandler = (event) => {
        event.preventDefault();
        if (IsValidUser(user, password))
            login({
                username: user,
                password: password
            });
        else
            setError("You have entered incorrect username or password.");
    }

    const userHandler = (event) =>
        setUser(event.target.value);

    const passwordHandler = (event) =>
        setPassword(event.target.value);

    return (
        <>
            <LoginBackground>
                <Container>
                    <LoginForm>
                        <Card body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" onChange={ userHandler } placeholder={ PrincipalUserData.user } />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={ passwordHandler } placeholder={ PrincipalUserData.password } />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit" onClick={ loginHandler }>
                                        Login
                                    </Button>
                                </div>
                            </Form>

                            { error &&
                                <>
                                    <br />
                                    <Form.Text className="text-danger">
                                        <b>{ error }</b>
                                    </Form.Text>
                                </>
                            }
                        </Card>
                    </LoginForm>
                </Container>
            </LoginBackground>
        </>
    );
}