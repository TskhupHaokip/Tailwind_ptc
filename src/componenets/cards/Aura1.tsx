import Coloring from "../common/Coloring";

const Aura1 = () => {
  return (
    <div className="aura h-full">
      <div className="card bg-base-100 h-full">
        <div className="card-body">
          <div className="aura aura-dual">
            <div className="card bg-base-100">
              <div className="card-body">
                <p>
                  <Coloring name="This card has aura" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aura1;
