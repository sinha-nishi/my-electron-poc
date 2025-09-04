import PostCard from "./PostCard";
import foodImg from "../assets/images/food.jpg";
import sunset from "../assets/images/sunset.jpg";
import kashmir from "../assets/images/Kashmir.jpg";
import Yoga from "../assets/images/Yoga.jpg";

const SectionGrid = () => (
  <section className="container">
    <div className="grid" style={{ marginTop: 6 }}>
      <PostCard
        title="A Week in Kashmir"
        user="travelista"
        src={kashmir}
      />
      <PostCard
        title="30 Days of Healthy Meals"
        user="ntaybyana"
        src={foodImg}
      />
      <PostCard
        title="Sunrise over the Himalayas"
        user="travelista"
        src={sunset}
      />
      <PostCard
        title="Best way to spend a Sunday!"
        user="onedlifted"
        src={foodImg}
      />
      <PostCard title="Morning Yoga Flow" user="fitwithanu" src={Yoga} />
    </div>

    {/* <div className="footer-grad card" style={{ marginTop: 18 }}>
        <div className="filters">
          <b style={{ marginRight: 8 }}>Trending Posts</b>
          {["All", "Food", "Travel", "Fitness"].map((x) => (
            <span
              key={"b" + x}
              className={"chip" + (x === "All" ? " active" : "")}
            >
              {x}
            </span>
          ))}
        </div>
        <div className="grid">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="card thumb">
              <Img alt={"thumb " + i} />
            </div>
          ))}
        </div>
      </div> */}
  </section>
);
export default SectionGrid;
