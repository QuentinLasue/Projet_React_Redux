import { Container, Row, Col, Image } from "react-bootstrap";

function Footer(){
    return(
        <footer>
            <Container className="justify-content-center">
                <Row>
                    <Col>
                        <Image src="favicon.ico" alt="Logo" width="60" height="60"></Image>
                    </Col>
                    <Col>
                        <h1 className="text-warning fw-bold">Search<i className="text-info">Films</i></h1>
                    </Col>
                    <Col>
                        <p className="text-secondary">Réaliser avec l'API The Movie Database</p>
                        <p className="text-secondary">ReactJS - Redux - Axios</p>
                    </Col>
                    <Col >
                        <p className="text-secondary">Résaliser lors de ma formations DWWM</p>
                        <a href="https://www.linkedin.com/in/quentin-lasue/" target="_blank" className="m-2" rel="noreferrer">
                            <Image src="linkedinLogo.png" alt="Logo Linkedin" width="40" height="40"></Image>
                        </a>
                        <a href="https://github.com/QuentinLasue" target="_blank" className="m-2" rel="noreferrer">
                            <Image src="githubLogo.png" alt="Logo Github" width="40" height="40"></Image>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;