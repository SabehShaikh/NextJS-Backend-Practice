"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Home({ params }) {
  const router = useRouter()

  const { slug } = params;
  const login = () => {
    router.push("/shop/1" , {name: "ghous ahmed"});
  };

  return (
    <div>
      <h1>Home {slug}</h1>

      <button onClick={login}>Login</button>

      <Link href="/shop/1"> Shop </Link>
    </div>
  );
}

export default Home;
