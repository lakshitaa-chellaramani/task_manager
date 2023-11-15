import TaskState from "@/lib/TaskState";
import { AuthContextProvider } from "@/lib/auth";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <TaskState>
          <Component {...pageProps} />
        </TaskState>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
