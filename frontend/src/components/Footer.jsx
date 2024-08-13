import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
          <Col className='text-center py-3'>
            Movie Pointer &copy; {currentYear} | Benny Chen
          </Col>
      </Container>
    </footer>
  );
};

export default Footer;
