import Coloring, { closeDrawer } from "./Coloring";


const Topbar = () => {
  return (
    <div  className="navbar min-h-0 h-11.5 p-2 bg-slate-950 gap-1.5">
        <div className="flex-none" >
            <label htmlFor="my-drawer-1" 
            className="btn btn-square btn-ghost rounded-[7px]"
            >
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-7 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
            </label>
        </div>
        <div onClick={closeDrawer} className="flex-1 max-w-112.5 ">
            <a href="#myapp" className="btn  btn-ghost rounded-[7px] text-2xl">
                <span className="text-blue-300">My</span> 
                <span className="text-purple-600">App</span> 
            </a>

        </div>
        <div onClick={closeDrawer} className="flex-1 ">
            <a href="#" className="btn btn-ghost rounded-[7px]  text-[18px] ">
                <Coloring name="Welcome To My Practice Website"/>
            </a>

        </div>
       
        <div onClick={closeDrawer} className="flex-none">
            <a href="#register" className="btn btn-ghost rounded-[7px] text-[21px] ">
                <Coloring name="Register"/>
            </a>

        </div>

    </div>
  );
};

export default Topbar;
