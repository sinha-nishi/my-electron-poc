import Img from "./Image";
import foodImg from "../../renderer/assets/images/food.jpg";
import { FaHeart, FaRegBookmark, FaUserFriends } from "react-icons/fa";

const Hero = () => (
  <section className="container hero">
    <div className="card pad hero-card">
      <div>
        <h1>
          Discover the world
          <br />
          through food, travel,
          <br />
          and stories.
        </h1>
        <p>Join a vibrant community sharing bites, journeys, and passions.</p>
        <a className="btn" href="#">
          Explore Food
        </a>
        <div className="badges" style={{ marginTop: 20 }}>
          <span className="badge">travels</span>
          <span className="badge">recipes</span>
          <span className="badge">fitness</span>
        </div>
      </div>
    </div>

    <div className="hero-minicard card">
      <Img alt="Food & Recipes" src={foodImg} />
      <div className="meta">
        <div>
          <div className="badge" style={{ marginBottom: 8, marginTop: 10 }}>
            Food & Recipes
          </div>
          <div className="stat">
            <FaUserFriends className="icon user-icon" />
           <span style={{marginTop: 3}}>35.39k</span>
          </div>
        </div>
        <div>
          <div className="stat">
            <FaHeart className="icon heart-icon" />
            <span style={{marginTop: 3}} >10</span>
          </div>
         <FaRegBookmark className="icon bookmark-icon" size={30} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
