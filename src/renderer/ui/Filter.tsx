const Filters = ({ active = "All" }) => (
  <div className="filters container">
    <b style={{ marginRight: 8 }}>Trending Posts</b>
    {["All", "Food", "Travel", "Fitness"].map((x) => (
      <span key={x} className={"chip" + (x === active ? " active" : "")}>
        {x}
      </span>
    ))}
  </div>
);

export default Filters