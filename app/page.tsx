import Image from "next/image";
import Link from "next/link";
import ProductCart from "./components/ProductCart";

export default function Home() {
  return (
    <div className="font-sans  min-h-screen">
      <main>

        <h1>Hello World</h1>
        {/* <a href="/users">User Pages</a> */}
        <Link href="/users">Users</Link>
        <ProductCart/>
      </main>
    </div>
  );
}
