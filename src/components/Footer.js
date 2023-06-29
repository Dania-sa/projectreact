import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col size={12} sm={6}>
                        <img src={logo} alt="LOGO"/>
                    </Col>
                    <Col size={12} sm={6} className="text-center- text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/dania-alsawaf-a44059269"><img src={navIcon1}/></a>
                            <a href="https://www.facebook.com/dania.alsawaf.73?mibextid=ZbWKwL"><img src={navIcon2}/></a>
                            <a href="https://instagram.com/dania.alsawaf?igshid=MzNlNGNkZWQ4Mg=="><img src={navIcon3}/></a>
                        </div>
                        <p>Copyright © 2023 Dania Emad Al-Sawaf. All rights</p>
                        <p>MOB: +963-937647698</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}