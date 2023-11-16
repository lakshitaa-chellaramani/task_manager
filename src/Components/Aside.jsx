import { getAuth, signOut } from "firebase/auth";
import app from "@/lib/firebase";
import React from "react";
import { useAuth } from "@/lib/auth";
import { router  } from "next/router";

const Aside = () => {
  const auth = getAuth(app);
  const { user } = useAuth();

  return (
    <div>
      <aside className="fixed top-0 z-9 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
        <div>
          <div className="flex justify-center -mx-6 px-6 py-4">
            <a href="#" title="home">
              <img src="logo.svg" className="w-32" alt="tailus logo" />
            </a>
          </div>

          <ul className="mt-8 space-y-2 tracking-wide">
            
            <li>
              <a
                href="/"
                aria-label="board"
                className="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="dark:fill-slate-600 fill-current text-cyan-400"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span className="-mr-1 font-medium">Board</span>
              </a>
            </li>
           
            <li>
              <a
                href="/profile"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
                  Profile
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div
         
          className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700"
        >
          <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
               
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
           {user && <span  onClick={() => {
            signOut(auth);
          }} className="group-hover:text-gray-700 dark:group-hover:text-white">
              {user.email}
            </span>}
            {!user && <span  onClick={() => {
                router.push("/login");
}} className="group-hover:text-gray-700 dark:group-hover:text-white">
              Login
            </span>}
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Aside;