

const Card = () => {
  return (
   <div className="card  bg-violet-600  ">
    <div className="card-body">
        <h2 className="card-title">My Project</h2>

        <p>A project description.</p>

        <div className="card-actions">
            <button className="btn btn-soft btn-success rounded-[10px]">
                Open
            </button>
        </div>
    </div>
</div>
  )
}

export default Card