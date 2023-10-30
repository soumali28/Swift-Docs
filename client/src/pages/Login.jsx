import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function Login() {
  return (
    <div className="m-8 flex justify-center items-center">
      <div className="form-control w-4/12">
        <h3 className="text-center font-serif text-orange-700 text-2xl my-6">
          Signin to your account
        </h3>
        <label className="input-group input-group-md my-3">
          <span>Email</span>
          <input
            type="email"
            placeholder="example@ex.com"
            className="input input-bordered w-full"
          />
        </label>
        <label className="input-group input-group-md my-3">
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
          />
        </label>
        <span className="text-lg m-8 text-center text-orange-600">Or</span>
        <GoogleOAuthProvider clientId="<your_client_id>">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
        <div className="m-5 text-center text-slate-600">
          <span>
            Not registered?{" "}
            <a href="/register" className="font-bold">
              Register
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
