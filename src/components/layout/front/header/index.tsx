"use client";
import { useState } from "react";
import "./style.css";
import { Montserrat } from "next/font/google";
import NavLink from "@/components/shares/navlink";
import Image from "next/image";

import korzinka from "@/assets/images/korzinka.png";

const montserrat = Montserrat({ subsets: ["latin"] });

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className={montserrat.className}>
      <div className="container">
        <nav className="header-nav">
          <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between  md:py-5 md:block">
                <NavLink href="/">
                  <h2 className="text-2xl  text-white  font-bold">
                    Vodiy Parfume
                  </h2>
                </NavLink>

                <div className="md:hidden">
                  <button onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                      <svg
                        className=""
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    ) : (
                      <svg
                        className=""
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 21">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                  navbar ? "p-12 md:p-0 block" : "hidden"
                }`}>
                <ul className="h-screen md:h-auto items-center justify-center md:flex list-wrap ">
                  <li
                    onClick={() => setNavbar(!navbar)}
                    className="header-list pb-6 text-xl text-white py-2 md:px-6 text-center  md:border-b-0  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <NavLink href="/products">Mahsulotlar</NavLink>
                  </li>
                  <li
                    onClick={() => setNavbar(!navbar)}
                    className="header-list pb-6 text-xl text-white py-2 md:px-6 text-center  md:border-b-0  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <NavLink href="/favorite">Sevimlilar</NavLink>
                  </li>
                  <li
                    onClick={() => setNavbar(!navbar)}
                    className="header-list pb-6 text-xl text-white py-2 md:px-6 text-center  md:border-b-0  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <NavLink href="/about">Haqida</NavLink>
                  </li>
                  <li
                    onClick={() => setNavbar(!navbar)}
                    className="header-list pb-6 text-xl text-white py-2 md:px-6 text-center  md:border-b-0  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <NavLink href="/contact">Contact</NavLink>
                  </li>

                  <li
                    onClick={() => setNavbar(!navbar)}
                    className="header-list pb-6 text-xl text-white py-2 md:px-6 text-center  md:border-b-0  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <NavLink href="/login">Aloqa</NavLink>
                  </li>
                  <li
                    onClick={() => setNavbar(!navbar)}
                    className="header-list pb-6 text-xl text-white py-2 md:px-6 text-center  md:border-b-0  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <NavLink href="/login">Login</NavLink>
                  </li>
                  <li
                    onClick={() => setNavbar(!navbar)}
                    className=" header-list pb-6 text-xl text-white py-2 md:px-6 text-center  md:border-b-0    md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <NavLink href="/register">Register</NavLink>
                  </li>
                  <li
                    onClick={() => setNavbar(!navbar)}
                    className="header-list pb-6 text-xl text-white py-2 md:px-6 text-center  md:border-b-0  md:hover:text-sky-600 md:hover:bg-transparent transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <NavLink href="/cart">
                      <Image src={korzinka} width={30} alt="korzinka" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
