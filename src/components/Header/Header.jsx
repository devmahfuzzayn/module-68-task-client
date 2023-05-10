import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Teas
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <Link to="/teas">See Teas</Link>
                                    </li>
                                    <li>
                                        <Link to="/addTea">Add Tea</Link>
                                    </li>
                                </ul>
                            </li>
                            <li tabIndex={0}>
                                <a>
                                    Syrups
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <Link to="/syrups">See Syrups</Link>
                                    </li>
                                    <li>
                                        <Link to="/addSyrups">Add Syrup</Link>
                                    </li>
                                </ul>
                            </li>
                            <li tabIndex={0}>
                                <a>
                                    Milks
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <Link to="/milks">See Milks</Link>
                                    </li>
                                    <li>
                                        <Link to="/addMilks">Add Milk</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        MongoDB Module Task
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Home</a>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Teas
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li>
                                    <Link to="/teas">See Teas</Link>
                                </li>
                                <li>
                                    <Link to="/addTea">Add Tea</Link>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Syrups
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li>
                                    <Link to="/syrups">See Syrups</Link>
                                </li>
                                <li>
                                    <Link to="/addSyrup">Add Syrup</Link>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Milks
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li>
                                    <Link to="/milks">See Milks</Link>
                                </li>
                                <li>
                                    <Link to="/addMilk">Add Milk</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">See All Data</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
