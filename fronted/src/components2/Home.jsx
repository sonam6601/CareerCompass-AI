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

        mode: "cors",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
          password: password,
        }),

      });


      const data = await response.json();


      console.log(data);


      if (response.ok && data.message === "Login Successful") {

        alert("✅ Login Successful");


        localStorage.setItem(
          "token",
          data.token
        );


        localStorage.setItem(
          "userEmail",
          data.user.email
        );


        navigate("/dashboard");


      } else {

        alert(data.message || "Invalid Credentials");

      }


    } catch (error) {

      console.error(error);

      alert("❌ Server Error");

    }

  };



  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7fb",
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >

        <h1>
          🚀 CareerCompass AI
        </h1>


        <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}

        />


        <input

          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}

        />



        <button

          onClick={handleLogin}

          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}

        >

          Login

        </button>



        <p
          style={{
            marginTop: "20px",
            color: "#555",
          }}
        >

          Demo Login

          <br />

          <b>Email:</b> admin@gmail.com

          <br />

          <b>Password:</b> 1234


        </p>


      </div>


    </div>

  );

}


export default Home;