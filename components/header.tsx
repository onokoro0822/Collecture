// src/components/header.tsx

import React from "react";
import '../app/globals.css';

export function Header() {
  return (
    <header style={{ padding: "1rem",  textAlign: "center" }}>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-3xl font-semibold p-6 rounded-lg shadow-lg">
        collecture
      </div>
    </header>
  );
}
