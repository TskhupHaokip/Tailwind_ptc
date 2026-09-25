import SideBar from "./componenets/common/SideBar";
import Topbar from "./componenets/common/Topbar";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/RegisterPage";
import Toast from "./componenets/Toast";

type ToastData = {
  message: string;
  status: boolean;
  show: boolean;
};

const pages = {
  home: Home,
  login: LoginPage,
  register: RegisterPage,
};

function App() {
  const [page, setPage] = useState("home");

  const [toast, setToast] = useState<ToastData>({
    message: "",
    status: false,
    show: false,
  });

  const showToast = (message: string, status: boolean) => {
    setToast({
      message,
      status,
      show: true,
    });

    setTimeout(() => {
      setToast((old) => ({
        ...old,
        show: false,
      }));
    }, 3000);
  };

  const Current_page =
    pages[page as keyof typeof pages] || PageNotFound;

  return (
    <AuthProvider>
      <div className="flex flex-x flex-col min-h-screen h-dvh bg-base-300">

        {toast.show && (
          <Toast
            message={toast.message}
            status={toast.status}
          />
        )}

        <Topbar setPage={setPage} />

        <SideBar setPage={setPage} />

        <Current_page
          showToast={showToast}
          setPage={setPage}
        />

      </div>
    </AuthProvider>
  );
}

export default App;