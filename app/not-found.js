'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import NotFoundImage from "@/public/404-page.svg";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="notfound-content">
      <Image
        src={NotFoundImage}
        alt="404 Not Found"
        className="notfound-image"
        priority
      />
      <p className="notfound-text">Oops! Page not found.</p>
      <p className="notfound-subtext">
        The page you’re looking for might have been removed or is temporarily unavailable.
      </p>
      <button className="notfound-button" onClick={() => router.push("/")}>
         Back to Home
      </button>
    </div>
  );
}
