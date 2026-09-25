type Mes_Props = {
  message: string;
  status?: boolean;
};


const Toast = ({ message, status=false }: Mes_Props) => {
  return (
    <div id="toast" className="toast toast-top toast-center toast-fade mt-8.5  ">
      {status ? (
        <div className="alert alert-success text-[18px] font-semibold">{`✅ ${message}`}</div>
      ) : (
        <div className="alert alert-error text-[18px] bg-red-200 text-red-600 font-semibold">{`❌ ${message}`}</div>
      )}
    </div>
  );
};


export default Toast;
