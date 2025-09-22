"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 flex max-w-screen h-[100px] items-center justify-center bg-gray-100 fade-in1 z-[1000]">
      <div className="w-[98%] flex justify-evenly">
        <div className="flex items-center h-full gap-[10px]">
          <Link href="/">
            <Image
              src="/images/orkhon-khasu-logo.png"
              width={70}
              height={70}
              alt="Orkhon Khasu Logo"
              className="cursor-pointer"
            />
          </Link>

          <div className="flex gap-[5px]">
            <h4>Orkhon</h4>
            <h4>Khasu</h4>
          </div>
        </div>

        <div className="bg-gray-100">
          <Navbar expand="lg" className="">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
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
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
