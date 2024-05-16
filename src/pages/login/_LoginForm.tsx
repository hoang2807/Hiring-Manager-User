import React, { useState } from "react";
// import user, { $auth, addUser } from "@/store/auth";

const LoginForm = () => {
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const handleSubmit = (e: any) => {
    fetch(`http://localhost:3000/api/auth-user/signin`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.sessionStorage.setItem("id", data.data.user.id);
        window.sessionStorage.setItem("fullName", data.data.user.fullName);
        window.sessionStorage.setItem("email", data.data.user.email);
        window.sessionStorage.setItem(
          "phone_number",
          data.data.user.phone_number,
        );
        // user.setId(data.data.user.id);
        // user.setToken(data.data.tokens.accessToken);
        const cookieString = `id=${data.data.user.id}`;
        document.cookie = cookieString;
        // addUser(data.data.tokens.accessToken, data.data.user.id);
        document.location.href = "/";
      })
      .catch((error) => {
        showToast();
        console.log(error.message);
      });
  };

  function showToast() {
    const toast = document.querySelector(
      ".toast-login:where(.toast-top)",
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

  return (
    <div className="basis-1/2 max-w-sm">
      <div className="toast toast-login toast-top toast-end">
        <div className="alert alert-error">
          <span>Username hoặc mật khẩu sai.</span>
        </div>
      </div>
      <span className="block font-bold">Welcome to TopIT</span>
      <span>
        By signing in, you agree to ITviec’s
        <a className="link link-primary">Terms & Conditions</a> and
        <a className="link link-primary"> Privacy Policy</a>
        in relation to your privacy information.
      </span>
      <div className="card shrink-0 w-full shadow-2xl bg-base-100 mt-4">
        <form className="card-body">
          <div className="form-control mb-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path>
              </svg>
              <input
                type="text"
                id="username"
                name="username"
                className="grow"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <input
                type="password"
                name="password"
                id="password"
                className="grow"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <button
              className="btn btn-primary"
              id="submit"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
