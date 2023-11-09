import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";
import app from "@/lib/firebase";
import { useAuth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const auth = getAuth(app);
  const { user } = useAuth();

  return (
    <div className="flex h-screen justify-center items-center space-x-5">
      {!user && <Link href="/login">Login</Link>}
      {!user && <Link href="/signup">Signup</Link>}
      {user && (
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}
