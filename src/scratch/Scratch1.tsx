import Coloring from "../componenets/common/Coloring";

export const Scratch1 = () => {
  return (
    <div className="aura-1 h-full">
      <div className="aura-content-1 h-full">
        <h2>Aura Card 1</h2>
        <p>This is made from scratch.</p>
      </div>
    </div>
  );
};


export const Scratch2 = () => {
  return (
    <div className="aura-2 h-full ">
      <div className="aura-content-2 h-full">
        <h1><Coloring name="Card 2"/> </h1>
        <p><Coloring name="This is Made From Scratch"/></p>

      </div>

    </div>
  )
}

