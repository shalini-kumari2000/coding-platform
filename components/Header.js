import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../atom/loginState";
import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";
import AddPost from "./AddPost";
import SignIn from "./SignIn";

export default function Header() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  let handlelogoutState = () => {
    setIsLoggedIn(false);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-tahiti">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <img
              src="https://user-images.githubusercontent.com/55796944/159071145-0663bd34-4b60-494a-af8a-7f582ab93370.png"
              className="mr-3 h-6 sm:h-10"
              alt="Flowbite Logo"
              style={{ filter: "brightness(0.5)" }}
            />
          </a>
          <div className="flex md:order-2">
            {isLoggedIn === true ? (
              <div className="navbar__left flex dash-container">
                <div>
                  <AddPost />
                </div>
                <div className="user-menu-container">
                  <button onClick={onClick} className="user-menu-trigger">
                    <span>Welcome, Shalini</span>
                    <img
                      width="25"
                      height="25"
                      src="http://placehold.jp/3d4070/ffffff/150x150.png"
                      alt="User avatar"
                    />
                  </button>
                  <nav
                    ref={dropdownRef}
                    className={`user-menu ${isActive ? "active" : "inactive"}`}
                  >
                    <ul>
                      <li>
                        <div>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mt-0.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="px-2">My Profile</span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mt-0.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="px-2" onClick={handlelogoutState}>
                              Log out
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            ) : (
              <div>
                <SignIn />
              </div>
            )}
          </div>

          <div
            className="justify-between items-center hidden md:flex md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <div className="relative mr-3 md:mr-0 md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-adress-icon"
                className="block p-2 pl-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
