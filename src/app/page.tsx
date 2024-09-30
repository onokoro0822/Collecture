// app/page.tsx
import React from "react";
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Link href="/coin">
        コインページへ
      </Link>
    </div>
  );
};

export default Home;
