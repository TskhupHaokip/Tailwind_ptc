import { Colors, Side_Names } from "../../utils/themes";
import { Title } from "../../utils/util";

export const closeDrawer = () => {
  const drawer = document.getElementById(
    "my-drawer-1",
  ) as HTMLInputElement | null;

  if (drawer) {
    drawer.checked = false;
  }
};

export const SideItems = () => {
  return (
    <>
      {Side_Names.map((name, index) => (
        <li
          onClick={closeDrawer}
          key={index}
          className={` btn bg-black hover:bg-yellow-50 active:bg-black text-2xl rounded-[10px] m-2
                    ${index === Side_Names.length - 1 ? "mt-auto" : ""}
                    `}
        >
          <a href={`#${name}`}>
            <Coloring name={Title(name)} />
          </a>
        </li>
      ))}
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

