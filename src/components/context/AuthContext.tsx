import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type ValueType = {
  logedin: boolean;
  setLogedin: (logedin: boolean) => void;
  userData: {
    name: string;
    email: string;
  };
  setUserData: (userData: { name: string; email: string }) => void;
};

export const AuthContext = createContext({} as ValueType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookie] = useCookies();
  const [logedin, setLogedin] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (cookies.isLogedin === "True") {
      setLogedin(true);
    } else {
      setLogedin(false);
    }
  }, []);

  const value: ValueType = {
    logedin,
    setLogedin,
    userData,
    setUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
