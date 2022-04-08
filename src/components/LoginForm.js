import React from 'react';
import Alert from 'react-bootstrap/Alert'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

function LoginForm() {
    return (
        <main className='main center'>
  
            <Container>
                <h3>Logga in</h3>
                <Row>
                    <Col lg={5} md={6} sm={12}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                               
                                <Form.Control type="email" placeholder="Ange E-postadress" />
                            
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                               
                                <Form.Control type="password" placeholder="Lösenord" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Fortsätt vara inloggad" />
                            </Form.Group>
                            <div className="d-grid gap-2">
                            <Button variant="primary" type="submit"  >
                                Logga in
                            </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>

            </main>
    )
}

export default LoginForm