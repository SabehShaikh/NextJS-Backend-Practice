"use client";

export default function Button({ title }) {
  return <button onClick={() => alert("hello")}>{title}</button>;
}

