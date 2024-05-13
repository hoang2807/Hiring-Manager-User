import { socket } from "@/socket";
import React, { useEffect, useState } from "react";
// import { useStore } from "@nanostores/react";
// import user, { $auth } from "@/store/auth";

const Header = () => {
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");
  const [status, setStatus] = useState(false);
  const [notification, setNotification] = useState([]);

  // const store = useStore($auth);

  useEffect(() => {
    const id = window.sessionStorage.getItem("id") || "";

    getAvatar(id);
    getNotification(id);

    setId(id);
  }, [id]);

  useEffect(() => {
    const id = window.sessionStorage.getItem("id") || "";
    console.log("socket");
    socket.on("connect", () => {
      console.log("connect");
    });

    socket.on(`notification-${id}`, (data) => {
      console.log("data socket");
      showToast();
      setStatus(true);
      console.log(data);
    });
  }, []);

  function getAvatar(id: string) {
    fetch(`http://localhost:3000/api/user/${id}`)
      .then((res) => res.json())
      .then((data) => setAvatar(data.data.avatar))
      .catch((error) => console.error(error));
  }

  function getNotification(id: string) {
    fetch(`http://localhost:3000/api/notification/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNotification(data.data);
      })
      .catch((error) => console.error(error));
  }

  function showToast() {
    const toast = document.querySelector(
      ".toast:where(.toast-top)",
    ) as HTMLInputElement;
    toast.style.display = "block";
    toast.style.animation = "slideInLeft 1s";

    setTimeout(() => {
      toast.style.animation = "slideInRight 1s";
    }, 2000);

    setTimeout(() => {
      toast.style.display = "none";
    }, 3000);
  }

  function logout() {
    window.sessionStorage.clear();
    window.document.cookie = "id=";
    window.location.href = "/login";
  }

  return (
    <header className="navbar bg-[#1D232A] sticky top-0 z-50">
      <div className="toast toast-top toast-end">
        <div className="alert alert-info">
          <span>Bạn có thông báo mới</span>
        </div>
      </div>
      <div className="container mx-auto max-w-[1220px] flex justify-between ">
        <a className="text-xl text-[#fff]" href="/">
          TopIT
        </a>
        {!id ? (
          <div className="flex gap-2">
            <a href="/login" className="btn btn-primary">
              Login
            </a>
            <a href="/signup" className="btn btn-accent">
              Register
            </a>
          </div>
        ) : (
          <div className="flex">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                onClick={() => {
                  if (status) setStatus(!status);
                }}
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
                  {status ? (
                    <span className="badge badge-sm bg-primary outline-primary indicator-item"></span>
                  ) : (
                    <span className="badge badge-sm indicator-item bg-transparent border-transparent"></span>
                  )}
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-64 max-h-72 bg-[#fff] shadow overflow-scroll"
              >
                <div className="card-body">
                  {notification?.map((e: { text: string }) => (
                    <span className="pb-2 border-b">{e.text}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar online"
              >
                <div className="w-16 rounded-full">
                  {avatar ? (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={`http://localhost:3000/public/${avatar}`}
                    />
                  ) : (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#fff] rounded-box w-52"
              >
                <li>
                  <a className="justify-between" href="/profile">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
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
