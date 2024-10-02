import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav>
        <Image
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>Home</p>
        <p>Options</p>
        <p>Logout</p>
      </nav>
      <footer>©2024 RPA Lab</footer>
    </div>
  );
}
