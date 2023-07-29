import React from 'react'

const Register = () => {
  return (
    <><><div className="text-center font-mono text-red-800 text-5xl italic my-3">SIGN UP</div>
      <h3 className="text-center font-serif text=grey-100 text-xl my-3">Create a New Profile</h3></><div className="form-control">
        <label className="label">
          <span className="label-text">Enter you Name</span>
        </label>
        <label className="input-group">
          <span>Full Name</span>
          <input type="text" placeholder="NAME" className="input input-bordered" />
        </label>
        <div className="form-control">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <label className="input-group">
    <span>Email</span>
    <input type="text" placeholder="info@site.com" className="input input-bordered" />
  </label>
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Enter Your Password</span>
  </label>
  <label className="input-group">
    <span>Password</span>
    <input type="text" placeholder="info@site.com" className="input input-bordered" />
  </label>
</div>
      </div></>
  )
}

export default Register