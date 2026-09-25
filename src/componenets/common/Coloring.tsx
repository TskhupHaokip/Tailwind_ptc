import { AuthContext } from "../../context/AuthContext";
import { Colors, Side_Names } from "../../utils/themes";
import { Title } from "../../utils/util";
import { useContext } from "react";

export const closeDrawer = () => {
  const drawer = document.getElementById(
    "my-drawer-1",
  ) as HTMLInputElement | null;

  if (drawer) {
    drawer.checked = false;
  }
};

type SideBarProps = {
  setPage: (page: string) => void;
};

export const SideItems = ({ setPage }: SideBarProps) => {
  const context = useContext(AuthContext);

  const lastIndex = Side_Names.length - 1;
  const isLoggedIn = Boolean(context?.user);

  return (
    <>
      {Side_Names.map((name, index) => {
        const isLast = index === lastIndex;

        let label = Title(name);

        if (isLast) {
          if (isLoggedIn) {
            label = "Logout";
          } else {
            label = "Login";
          }
        }

        return (
          <li
            onClick={() => {
              closeDrawer();
              setPage(label.toLowerCase())

              if (isLast && isLoggedIn) {
                context?.setUser(null);
              }
            }}
            key={index}
            className={`btn bg-black hover:bg-yellow-50 active:bg-black text-2xl rounded-[10px] m-2
              ${index === Side_Names.length - 1 ? "mt-auto" : ""}
            `}
          >
            <a href={`#${label}`}>
              <Coloring name={label} />
            </a>
          </li>
        );
      })}
    </>
  );
};

const Coloring = ({ name }: { name: string }) => {
  return (
    <>
      {name.split("").map((char, index) => {
        const color = Colors[index % Colors.length];

        return (
          <span key={index} style={{ color }}>
            {char}
          </span>
        );
      })}
    </>
  );
};

export default Coloring;
