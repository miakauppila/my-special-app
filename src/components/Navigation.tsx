import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigation = () => {


  const location = useLocation();
  console.log(location.pathname);

  return (
    <Navbar className="p-lg-4" collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand><i className="bi bi-journal-medical"></i> Vet Visitor System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {location.pathname !== "/" &&
              <Nav.Link as="span">
                <Link className="pl-2" to="/">Home</Link>
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation