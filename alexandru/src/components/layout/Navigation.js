import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Navbar.Brand>
        <Link to='/' style={{ color: 'black' }}>
          Alexandru Tenie
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link as={Link} to={'/whoami'} className='first'>
            whoami
          </Nav.Link>
          <Nav.Link
            href='https://github.com/atenie'
            target='_blank'
            className='second'
          >
            git
          </Nav.Link>
          <Nav.Link
            href='https://drive.google.com/open?id=1jfg6RVUX3s6vKrIUBXQ4dD82z1ICzU6uWHaybKNxOVs'
            target='_blank'
            className='third'
          >
            cv
          </Nav.Link>
          <Nav.Link href='mailto:alexandru@tenie.ro' className='fourth'>
            ping
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
