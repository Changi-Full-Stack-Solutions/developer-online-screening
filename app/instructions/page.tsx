import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <div>
        <p className="text-gary-800 font-semibold">
          Achieve the following layout:
        </p>
        <Image
          src="/developer-online-screening-diagram.png"
          height={800}
          width={800}
          alt=""
        />
      </div>
    </div>
  );
}
