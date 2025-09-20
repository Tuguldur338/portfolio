"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header className="flex w-screen h-[100px] items-center justify-center bg-gray-100">
      <div className="w-[98%] flex justify-between">
        <div className="flex w-[200px]">
          <Link href={"/"}>
            <Image
              src="/images/orkhon-khasu-logo.png"
              width={50}
              height={50}
              alt="Orkhon Khasu Logo"
              className="cursor-pointer"
            />
          </Link>

          <h4>Orkhon Khasu</h4>
        </div>

        <div className="bg-gray-100">
          <Navbar expand="lg" className="">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/About">About</Nav.Link>

                  <Nav.Link href="/Prices">Prices/fees</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
