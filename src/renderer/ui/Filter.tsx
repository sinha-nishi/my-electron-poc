import React from "react";

type FiltersProps = {
  active: string;
  setActive: (val: string) => void;
};

const Filters: React.FC<FiltersProps> = ({ active, setActive }) => (
  <div className="filters container">
    <b style={{ marginRight: 8 }}>Trending Posts</b>
    {["All", "Food", "Travel", "Fitness"].map((x) => (
      <span
        key={x}
        onClick={() => setActive(x)}
        className={"chip" + (x === active ? " active" : "")}
        style={{ cursor: "pointer" }}
      >
        {x}
      </span>
    ))}
  </div>
);

export default Filters;
