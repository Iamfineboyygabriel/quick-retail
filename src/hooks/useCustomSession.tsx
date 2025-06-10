import { atom, useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

// Helper to load user safely
const loadUserFromStorage = () => {
  try {
    if (typeof window !== "undefined" && window.sessionStorage) {
      const user = window.sessionStorage.getItem("user");
      if (user && user !== "undefined") {
        return JSON.parse(user);
      }
    }
  } catch (error) {
    console.error("Failed to load user from sessionStorage:", error);
  }
  return null;
};

// Atom to hold user data
export const userAtom = atom<unknown | null>(loadUserFromStorage());

// Clear all session storage and reset user
export const clearUser = () => {
  try {
    if (typeof window !== "undefined" && window.sessionStorage) {
      window.sessionStorage.clear();
    }
  } catch (error) {
    console.error("Failed to clear sessionStorage:", error);
  }
};

export const useSessionStorage = () => {
  const [user, setUser] = useAtom(userAtom);

  const updateUser = (value: unknown) => {
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        if (value) {
          window.sessionStorage.setItem("user", JSON.stringify(value));
        } else {
          window.sessionStorage.removeItem("user");
        }
      }
    } catch (error) {
      console.error("Failed to update sessionStorage:", error);
    }
    setUser(value);
  };

  const clearUser = () => {
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        window.sessionStorage.clear();
      }
    } catch (error) {
      console.error("Failed to clear sessionStorage:", error);
    }
    setUser(null);
  };

  return { user, setUser, updateUser, clearUser };
};

// Logout hook
export const useLoggedOut = () => {
  const router = useNavigate();
  const { clearUser } = useSessionStorage();

  const logout = () => {
    clearUser();
    router("/login");
  };

  return logout;
};
