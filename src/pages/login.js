import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "@/lib/firebase";
import { login, signInWithGoogle, useAuth } from "@/lib/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const auth = getAuth(app);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const loginUser = async () => {
    setError(false);
    const { user, error } = await login(auth, email, password, setLoading);
    if (error) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="flex w-64 mx-auto flex-col space-y-6 justify-center items-center h-screen">
      <button
        className="bg-black text-white w-full py-2"
        onClick={() => {
          const { user, error } = signInWithGoogle(setLoading);
          if (error) {
            setError(true);
          } else {
            setError(false);
          }
        }}
      >
        Login in with Google
      </button>
      <input
        id="email"
        type="email"
        className="border p-2 outline-none w-full"
        placeholder="a@example.com"
        value={email}
        disabled={loading}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="password"
        type="password"
        value={password}
        placeholder="********"
        className="border p-2 outline-none w-full"
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="w-full py-2 px-1 text-lg bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => {
          loginUser();
        }}
        disabled={loading}
      >
        {loading ? <p>Loading...</p> : <p>Login</p>}
      </button>

      {error && <p className="text-center text-red-500 ">Failed</p>}
    </div>
  );
}
