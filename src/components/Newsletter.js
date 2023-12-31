import { Col , Row, Alert} from "react-bootstrap";
import { useState, useEffect } from "react";

export const Newsletter = ({onValidate, status, message}) => {

    const [email, setEmail] = useState('');
    useEffect(() => {
        if(status === 'success') clearFields();
    },[status])
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidate ({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail('');
    }
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Send your E-mail add to see more projects...</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col size={12} md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx" >
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}