import RegisterForm from "../componenets/cards/RegisterForm"


type SideBarProps = {
  setPage: (page: string) => void;
};

const RegisterPage = ({setPage}:SideBarProps) => {
  return (
    <div className="flex flex-1 flex-col text-2xl min-h-0 items-center justify-center p-5">
        This is Register Page
        <RegisterForm setPage={setPage}/>
    </div>
  )
}

export default RegisterPage