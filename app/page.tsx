import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav>
        <Image
          src="/cag-logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>Home</p>
        <p>Options</p>
        <p>Logout</p>
      </nav>
      <footer>Designed and Built by the RPA Lab</footer>
    </div>
  );
}
