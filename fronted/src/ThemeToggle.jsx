import { useState } from "react";

function ThemeToggle() {

  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );


  const toggleTheme = () => {

    const newTheme = !dark;

    setDark(newTheme);

    localStorage.setItem(
      "theme",
      newTheme ? "dark" : "light"
    );


    document.body.style.background = newTheme
      ? "#111827"
      : "#f4f7fb";


    document.body.style.color = newTheme
      ? "white"
      : "black";

  };


  return (

    <button

      onClick={toggleTheme}

      style={{
        padding:"12px 20px",
        border:"none",
        borderRadius:"10px",
        cursor:"pointer",
        background: dark ? "#facc15" : "#2563eb",
        color: dark ? "black" : "white",
        fontWeight:"bold"
      }}

    >

      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}

    </button>

  );

}


export default ThemeToggle;