"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    fetch("/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const addUser = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }), // Send user data as JSON
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const userData = await response.json();
      console.log("User added:", userData);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <input type="email" onChange={(e) => setEmail(e.target.value)} />

      <input type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={addUser}>Add User</button>
    </div>
  );
}
