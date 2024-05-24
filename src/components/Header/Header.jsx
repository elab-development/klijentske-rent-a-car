import React from "react";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__top">
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6'>
                            <div className="header__top__left">
                                <span>Treba Vam pomoć?</span>
                                <span className="header__top__help">
                                <i class="ri-phone-fill"></i> +381 64-555-666
                                </span>    
                            </div> 
                        </Col>

                        <Col lg='6' md='6' sm='6'>
                            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                            <Link to="#" className="d-flex align-items-center gap-1">
                                <i class="ri-login-circle-line"></i> Prijava
                            </Link>
                            <Link to="#" className="d-flex align-items-center gap-1">
                                 <i class="ri-user-fill"></i> Registracija
                            </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
     );
}
 
export default Header;