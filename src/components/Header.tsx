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
    socket.on("connect", () => {
      console.log("connect");
    });

    socket.on(`notification-${id}`, (data) => {
      showToast();
      setStatus(true);
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
        <div className="flex gap-2">
          <svg
            viewBox="45.15333333333334 4.083333333333334 197.69 280.67333333333335"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
          >
            <g fill="none" strokeWidth="2">
              <path
                d="M219.46 117c-1.46.82-.27-3.13-1.7-1.57-.72.79-.2 2.52.42 3.21a1.09 1.07-62.3 0 1 .25.84q-.14 1.21.63 2a1.28.94-73.7 0 1 .3.83l.01 1.67a.68.52 84.7 0 1-.4.63c-2.91.69-2.49-2.42-4.47-3.66q-.38-.24-.63-.7c-1.46-2.72-3.63 1.39-5.82-1.67a.61.58-28.8 0 0-.72-.19q-1.68.71-3.02-.52a1.42 1.36-21.1 0 0-.86-.36q-1.41-.08-2.27-1.31a.82.67 64.4 0 0-.75-.35q-1.21.24-1.92 1.14a.67.61-59.6 0 1-.74.23q-2.49-1.01-4.2-3.05a1.13.86 64.1 0 0-.81-.41q-1.29.04-2.06 1.01a.4.39 41.3 0 1-.59.03l-1.92-1.91a1.13.82-22.7 0 0-.89-.21q-2.59.45-5.12-.57a1.51 1.32-39.9 0 0-.93-.02q-3.55 1.08-5.05-2.44a1.5.96 82.7 0 0-.6-.72q-.9-.46-1.98-.18a.79.74-26.2 0 1-.78-.24q-2.16-2.56-5.17-.98a.63.57-31.7 0 1-.76-.14l-.91-1.23a.61.57-29.7 0 0-.71-.17c-2.54 1.1-4.21-7.79-4.75-9.5q-.16-.51-.36-.02c-.98 2.36 1.08 3.2.28 5.28"
                stroke="#0b021e"
              />
              <path
                d="M130.71 90.98q-1.92 1.62-2.62 4.06-.05.19-.01 0 .51-2.72-1.2-4.46a1.07.86-23.3 0 0-.85-.24q-2.29.38-2.72-1.53-.09-.42-.39-.11-1.62 1.74-3.39-.09a.43.4-45.5 0 0-.6.03q-.44.48-1.12.16a.8.76 39.3 0 0-.8.06q-1.07.76-2.23.3a1.53.96 76.3 0 1-.68-.66q-1.8-3.27-5.58-3.48a1.61 1.05 56.9 0 1-.84-.37q-.6-.49-1.51-.59a.63.59 87.4 0 1-.54-.52q-.2-1.22-1.33-1.5a.87.71-60.5 0 0-.79.31q-.92 1.15-2.3 1.81a.65.57 57.9 0 1-.74-.22l-.88-1.15a1.12.92-15 0 0-.81-.37q-2.94-.02-5.43-1.44c-.76-.43-.83-1.37-2.07-1.15a1.24.95-26.5 0 1-.87-.17q-1.6-1.14-3.23-.21a1.04.72-40.9 0 1-.89.1l-1.67-.91a.54.5 30.9 0 0-.67.14q-.65.95-1.67 1.03a.4.35-84.3 0 1-.35-.5l2.22-9.01q.13-.53-.35-.27l-.8.43"
                stroke="#0c021e"
              />
              <path
                d="M122 210.54l-1.02.54a.54.53 62.9 0 0-.22.7c1.25 2.65 3.13 3.12 5.74 4.06 3.26 1.17 5.92 3.03 9.17 4.27 1.37.52 2.29 1.7 3.83 2.25 5.06 1.78 9.78 4.43 12.32 5.55q10.07 4.47 15.64 7.49c1.4.77 2.89.54 4.32 1.44 2.13 1.36 6.37 4.94 8.77 2.8a.64.29 31.4 0 1 .59.07l.49.25"
                stroke="#ff5a04"
              />
              <path
                d="M188.29 231.25q-.38-.99 0-2.03a.47.46-70.6 0 0-.28-.61c-1.2-.39-2.1-1.17-3.31-1.4-4-.75-7.53-3.46-10.24-4.66Q163.77 217.79 161 216q-1.87-1.19-3.64-1.44c-2.46-.35-4.22-1.03-6.36-1.27"
                stroke="#ff510b"
              />
            </g>
            <path
              d="M219.46 117c-1.46.82-.27-3.13-1.7-1.57-.72.79-.2 2.52.42 3.21a1.09 1.07-62.3 0 1 .25.84q-.14 1.21.63 2a1.28.94-73.7 0 1 .3.83l.01 1.67a.68.52 84.7 0 1-.4.63c-2.91.69-2.49-2.42-4.47-3.66q-.38-.24-.63-.7c-1.46-2.72-3.63 1.39-5.82-1.67a.61.58-28.8 0 0-.72-.19q-1.68.71-3.02-.52a1.42 1.36-21.1 0 0-.86-.36q-1.41-.08-2.27-1.31a.82.67 64.4 0 0-.75-.35q-1.21.24-1.92 1.14a.67.61-59.6 0 1-.74.23q-2.49-1.01-4.2-3.05a1.13.86 64.1 0 0-.81-.41q-1.29.04-2.06 1.01a.4.39 41.3 0 1-.59.03l-1.92-1.91a1.13.82-22.7 0 0-.89-.21q-2.59.45-5.12-.57a1.51 1.32-39.9 0 0-.93-.02q-3.55 1.08-5.05-2.44a1.5.96 82.7 0 0-.6-.72q-.9-.46-1.98-.18a.79.74-26.2 0 1-.78-.24q-2.16-2.56-5.17-.98a.63.57-31.7 0 1-.76-.14l-.91-1.23a.61.57-29.7 0 0-.71-.17c-2.54 1.1-4.21-7.79-4.75-9.5q-.16-.51-.36-.02c-.98 2.36 1.08 3.2.28 5.28q-5.91-19.23-11.52-38.54c-1.05-3.61-2.96-7.95-7.29-5.06q-1.55 1.03-2.26 3.49-4.25 14.71-8.68 29.34-1.92 1.62-2.62 4.06-.05.19-.01 0 .51-2.72-1.2-4.46a1.07.86-23.3 0 0-.85-.24q-2.29.38-2.72-1.53-.09-.42-.39-.11-1.62 1.74-3.39-.09a.43.4-45.5 0 0-.6.03q-.44.48-1.12.16a.8.76 39.3 0 0-.8.06q-1.07.76-2.23.3a1.53.96 76.3 0 1-.68-.66q-1.8-3.27-5.58-3.48a1.61 1.05 56.9 0 1-.84-.37q-.6-.49-1.51-.59a.63.59 87.4 0 1-.54-.52q-.2-1.22-1.33-1.5a.87.71-60.5 0 0-.79.31q-.92 1.15-2.3 1.81a.65.57 57.9 0 1-.74-.22l-.88-1.15a1.12.92-15 0 0-.81-.37q-2.94-.02-5.43-1.44c-.76-.43-.83-1.37-2.07-1.15a1.24.95-26.5 0 1-.87-.17q-1.6-1.14-3.23-.21a1.04.72-40.9 0 1-.89.1l-1.67-.91a.54.5 30.9 0 0-.67.14q-.65.95-1.67 1.03a.4.35-84.3 0 1-.35-.5l2.22-9.01q.13-.53-.35-.27l-.8.43Q96 26.8 99.45 16.98c2.92-8.29 9.77-12.24 18.39-12.45q23.86-.59 47.71-.16c14.24.26 20.26 2.97 24.4 16.36q14.89 48.09 29.51 96.27z"
              fill="#07011a"
            />
            <path
              d="M130.71 90.98l-23.78 80.97a1.25 1.25-86.6 0 1-.99.88q-31.46 5.55-60.19 20.21-.67.35-.45-.37L83 70.46l.8-.43q.48-.26.35.27l-2.22 9.01a.4.35-84.3 0 0 .35.5q1.02-.08 1.67-1.03a.54.5 30.9 0 1 .67-.14l1.67.91a1.04.72-40.9 0 0 .89-.1q1.63-.93 3.23.21a1.24.95-26.5 0 0 .87.17c1.24-.22 1.31.72 2.07 1.15q2.49 1.42 5.43 1.44a1.12.92-15 0 1 .81.37l.88 1.15a.65.57 57.9 0 0 .74.22q1.38-.66 2.3-1.81a.87.71-60.5 0 1 .79-.31q1.13.28 1.33 1.5a.63.59 87.4 0 0 .54.52q.91.1 1.51.59a1.61 1.05 56.9 0 0 .84.37q3.78.21 5.58 3.48a1.53.96 76.3 0 0 .68.66q1.16.46 2.23-.3a.8.76 39.3 0 1 .8-.06q.68.32 1.12-.16a.43.4-45.5 0 1 .6-.03q1.77 1.83 3.39.09.3-.31.39.11.43 1.91 2.72 1.53a1.07.86-23.3 0 1 .85.24q1.71 1.74 1.2 4.46-.04.19.01 0 .7-2.44 2.62-4.06z"
              fill="#100322"
            />
            <path
              d="M219.46 117l23.25 75.78q.2.65-.41.34-28.56-14.62-60.16-20.29a1.01 1 86.5 0 1-.78-.7l-20.9-70.38c.8-2.08-1.26-2.92-.28-5.28q.2-.49.36.02c.54 1.71 2.21 10.6 4.75 9.5a.61.57-29.7 0 1 .71.17l.91 1.23a.63.57-31.7 0 0 .76.14q3.01-1.58 5.17.98a.79.74-26.2 0 0 .78.24q1.08-.28 1.98.18a1.5.96 82.7 0 1 .6.72q1.5 3.52 5.05 2.44a1.51 1.32-39.9 0 1 .93.02q2.53 1.02 5.12.57a1.13.82-22.7 0 1 .89.21l1.92 1.91a.4.39 41.3 0 0 .59-.03q.77-.97 2.06-1.01a1.13.86 64.1 0 1 .81.41q1.71 2.04 4.2 3.05a.67.61-59.6 0 0 .74-.23q.71-.9 1.92-1.14a.82.67 64.4 0 1 .75.35q.86 1.23 2.27 1.31a1.42 1.36-21.1 0 1 .86.36q1.34 1.23 3.02.52a.61.58-28.8 0 1 .72.19c2.19 3.06 4.36-1.05 5.82 1.67q.25.46.63.7c1.98 1.24 1.56 4.35 4.47 3.66a.68.52 84.7 0 0 .4-.63l-.01-1.67a1.28.94-73.7 0 0-.3-.83q-.77-.79-.63-2a1.09 1.07-62.3 0 0-.25-.84c-.62-.69-1.14-2.42-.42-3.21 1.43-1.56.24 2.39 1.7 1.57z"
              fill="#0f0321"
            />
            <path
              d="M122 210.54l-1.02.54a.54.53 62.9 0 0-.22.7c1.25 2.65 3.13 3.12 5.74 4.06 3.26 1.17 5.92 3.03 9.17 4.27 1.37.52 2.29 1.7 3.83 2.25 5.06 1.78 9.78 4.43 12.32 5.55q10.07 4.47 15.64 7.49c1.4.77 2.89.54 4.32 1.44 2.13 1.36 6.37 4.94 8.77 2.8a.64.29 31.4 0 1 .59.07l.49.25q-7.96 6.42-16.56 11.96c-11.86 7.63-16.28 18.13-10.33 32.13q.36.84-.47.44-15.3-7.46-18.84-23.45c-1.84-8.35 1.99-22.91-8.43-26.51-8.51-2.93-17.11 2.4-18.43 11.57q-.16 1.11-.89.26c-11.95-13.83-14.67-31.97-10.12-49.39q.22-.83.71-.12c5.2 7.55 15.16 11.42 23.73 13.69z"
              fill="#ff5d01"
            />
            <path
              d="M188.29 231.25q-.38-.99 0-2.03a.47.46-70.6 0 0-.28-.61c-1.2-.39-2.1-1.17-3.31-1.4-4-.75-7.53-3.46-10.24-4.66Q163.77 217.79 161 216q-1.87-1.19-3.64-1.44c-2.46-.35-4.22-1.03-6.36-1.27 13.56-.25 29.17-3.26 40.33-11.47a.47.47-26 0 1 .73.25q4.25 15.74-3.77 29.18z"
              fill="#ff4c0e"
            />
            <path
              d="M122 210.54q14.31 3.36 29 2.75c2.14.24 3.9.92 6.36 1.27q1.77.25 3.64 1.44 2.77 1.79 13.46 6.55c2.71 1.2 6.24 3.91 10.24 4.66 1.21.23 2.11 1.01 3.31 1.4a.47.46-70.6 0 1 .28.61q-.38 1.04 0 2.03-2.77 4.72-6.66 8.71l-.49-.25a.64.29 31.4 0 0-.59-.07c-2.4 2.14-6.64-1.44-8.77-2.8-1.43-.9-2.92-.67-4.32-1.44q-5.57-3.02-15.64-7.49c-2.54-1.12-7.26-3.77-12.32-5.55-1.54-.55-2.46-1.73-3.83-2.25-3.25-1.24-5.91-3.1-9.17-4.27-2.61-.94-4.49-1.41-5.74-4.06a.54.53 62.9 0 1 .22-.7z"
              fill="#ff5607"
            />
          </svg>
          <a className="text-xl text-[#fff]" href="/">
            TopIT
          </a>
        </div>
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
                  {notification?.map((e: { id: number; text: string }) => (
                    <span className="pb-2 border-b" key={e.id}>
                      {e.text}
                    </span>
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
