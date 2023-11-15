import TaskState from "@/lib/TaskState";
import { AuthContextProvider } from "@/lib/auth";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <TaskState>
        <Component {...pageProps} />
      </TaskState>
    </AuthContextProvider>
  );
}
