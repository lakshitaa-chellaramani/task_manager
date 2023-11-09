import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import app from "./firebase";
const auth = getAuth(app);

export const AuthContext = React.createContext({});

export const useAuth = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          Loading..
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

const signInWithGoogle = async (setLoading) => {
  const provider = new GoogleAuthProvider();
  let user = null,
    error = null;
  setLoading(true);
  try {
    const data = await signInWithPopup(auth, provider);
    user = data.user;
    setLoading(false);
  } catch (e) {
    error = e;
    setLoading(false);
  }

  return { user, error };
};

const login = async (auth, email, password, setLoading) => {
  setLoading(true);
  let user = null,
    error = null;

  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    user = data.user;
    setLoading(false);
  } catch (e) {
    error = e;
    setLoading(false);
  }

  return { user, error };
};

const createUser = async (auth, email, password, setLoading) => {
  setLoading(true);
  let user = null,
    error = null;
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    user = data.user;
    setLoading(false);
  } catch (e) {
    error = e;
    setLoading(false);
  }
  return { user, error };
};

export { createUser, login, signInWithGoogle };
