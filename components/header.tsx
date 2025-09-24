"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="bg-gray-100">
      <Navbar expand="lg" className="">
        <Container>
          <Link href="/">
            <Image
              src="/images/orkhon-khasu-logo.png"
              width={70}
              height={70}
              alt="Orkhon Khasu Logo"
              className="cursor-pointer"
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <div className="flex">
              <Nav className="ml-auto navbar-nav">
                <Nav.Link
                  href="/About"
                  className="hover:!text-black !font-semibold"
                >
                  About
                </Nav.Link>

                <Nav.Link
                  href="/Prices"
                  className="hover:!text-black !font-semibold"
                >
                  Prices/fees
                </Nav.Link>

                <Nav.Link
                  href="/Teachers"
                  className="hover:!text-black !font-semibold"
                >
                  Teachers
                </Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="/"></Nav.Link>

                <Nav.Link href="/"></Nav.Link>

                <Nav.Link href="/"></Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
