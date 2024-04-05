import React, { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { $auth, user } from "@/store/auth";

const Header = () => {
  const [id, setId] = useState("");

  const store = useStore($auth);

  useEffect(() => {
    setId(window.sessionStorage.getItem("id") || "");
    // console.log(user.getId());
    // console.log(user.getToken());
  }, []);
  return (
    <header className="navbar bg-[#1D232A] sticky top-0 z-50">
      <div className="container mx-auto max-w-[1220px] flex justify-between">
        <a className="text-xl text-[#fff]" href="/">
          TopIT
        </a>
        {id ? (
          <div className="flex-none">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    className="h-6 w-6 text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-[#fff] shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#fff] rounded-box w-52"
              >
                <li>
                  <a className="justify-between" href={`/profile/${id}`}>
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <button className="btn btn-primary">
              <a href="/login">Login</a>
            </button>
            <button className="btn btn-accent">
              <a href="/signup">Register</a>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

//  <style>
//   a {
//     color: white;
//   }

//   .indicator {
//     color: white;
//   }
// </style>

export default Header;
