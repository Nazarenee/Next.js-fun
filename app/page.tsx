import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Next-App</h1>
      <ProductCard />
    </main>
  );
}
