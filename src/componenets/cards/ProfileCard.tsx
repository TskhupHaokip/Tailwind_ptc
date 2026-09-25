import Coloring from "../common/Coloring";


type cardProps = {
    name? : string ;
    description? : string ;

}

const ProfileCard = ({ 
    name = "Ts Thangjakhup Haokip" ,
    description = "This is My Profile"

    }: cardProps ) => {
  return (
    <div className="card bg-gray-800 w-xs">
        <div className="card-body ">
           <h1 className="card-title">{name} </h1>
           <p><Coloring name={description} /></p>
        </div>
        <div className="card-actions justify-center m-3">
            <a href="#" className="btn btn-ghost rounded-[7px] text-[21px] bg-black
            hover:bg-gray-200 active:bg-green-600   ">
                <Coloring name="Edit" />
            </a>

        </div>

    </div>
  )
}

export default ProfileCard