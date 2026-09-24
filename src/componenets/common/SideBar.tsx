import  { SideItems } from "./Coloring";


const SideBar = () => {
  return (
    <div className="drawer ">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side top-11">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="sidebar-gradient min-h-[93%] flex flex-col w-60 p-3 ">
          <SideItems/>
        </ul>

      </div>
    </div>
  );
};

export default SideBar;
