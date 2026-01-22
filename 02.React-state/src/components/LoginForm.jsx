import { useState } from "react";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>Login Form</h2>

      <input type="email" placeholder="Email" />

      <br />
      <br />

      <input type={showPassword ? "text" : "password"} placeholder="Password" />

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          onChange={() => setShowPassword(!showPassword)}
        />
        Show Password
      </label>
    </div>
  );
}

export default LoginForm;
