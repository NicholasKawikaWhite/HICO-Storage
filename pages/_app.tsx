import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image';
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="whole-page">
    <div className="navbar">
    <Navbar bg="" >
    <Container>
    <Navbar.Brand href="/">
<Image src='/canyon.png' alt='fruita stroage company' width={180} height={50}/>
  </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Pricing</Nav.Link>
      <Nav.Link href="/units">Rent a Unit</Nav.Link>
      <Nav.Link href="#pricing">About Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
  <Component {...pageProps} />
  </div>
  );
}

export default MyApp
