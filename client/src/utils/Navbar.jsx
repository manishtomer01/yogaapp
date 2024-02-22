import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  console.log("currentUser :>> ", currentUser);
  async function handleSignOut() {
    await fetch("http://localhost:3000/user/signout");
  }
  return (
    <header class="">
      <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a class="block text-teal-600" href="#">
          <span class="sr-only">LOGO</span>
        </a>

        <div class="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <Link
                  to="/"
                  class="text-black-500 text-xl transition hover:text-gray-500/75"
                  href="#"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/explore"
                  class="text-black-500 text-xl transition hover:text-gray-500/75"
                  href="#"
                >
                  Explore
                </Link>
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              {currentUser ? (
                <button
                  onClick={handleSignOut}
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                >
                  logout
                </button>
              ) : (
                <Link
                  to="/login"
                  class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="#"
                >
                  Login
                </Link>
              )}
            </div>

            <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span class="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
