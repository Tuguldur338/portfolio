"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header className="flex justify-evenly bg-gray-200 fade-in1 py-[10px] items-center">
      <Link href="/" className="!no-underline text-black">
        <div className="flex gap-[10px] items-center">
          <Image
            src="/images/orkhon-khasu-logo.png"
            width={70}
            height={70}
            alt="Orkhon Khasu Logo"
            className="cursor-pointer"
          />

          <h4 className="!font-semibold">Orkhon Khasu</h4>
        </div>
      </Link>

      <div className="">
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <div className="flex">
                <Nav className="ml-auto navbar-nav">
                  <Nav.Link
                    href="/About"
                    className="hover:!text-orange-500 !font-normal !text-blue-800 transition-all duration-300"
                  >
                    ABOUT
                  </Nav.Link>

                  <Nav.Link
                    href="/Prices"
                    className="hover:!text-orange-500 !font-normal !text-blue-800 transition-all duration-300"
                  >
                    PRICES/FEES
                  </Nav.Link>

                  <Nav.Link
                    href="/Teachers"
                    className="hover:!text-orange-500 !font-normal !text-blue-800 transition-all duration-300"
                  >
                    TEACHERS
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
    </header>
  );
};

export default Header;
