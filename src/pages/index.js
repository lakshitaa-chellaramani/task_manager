import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";
import app from "@/lib/firebase";
import { useAuth } from "@/lib/auth";
import Dashboard from "@/Pages/Dashboard";
import { router } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const auth = getAuth(app);
  const { user } = useAuth();
  if (!user) {
    router.push("/login");
  }
  return (
    <div>
      <Dashboard />
    </div>
  );
}
