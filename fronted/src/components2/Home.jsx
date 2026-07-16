import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Login button clicked");

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.message === "Login Successful") {
        alert("✅ Login Successful");
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", data.user.email);
        navigate("/dashboard");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("❌ Server Error");
    }
  };


  return (
    <div>
      <h1>CareerCompass AI Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Home;