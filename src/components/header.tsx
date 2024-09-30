// src/components/header.tsx

import React from "react";

export function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#f0f0f0", textAlign: "center" }}>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
