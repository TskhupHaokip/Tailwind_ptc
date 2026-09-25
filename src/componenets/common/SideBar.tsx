
import  { SideItems } from "./Coloring";


type SideBarProps = {
  setPage: (page: string) => void;
};

const SideBar = ({setPage}:SideBarProps) => {
 
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
          <SideItems setPage={setPage}/>
        </ul>

      </div>
    </div>
  );
};

export default SideBar;
