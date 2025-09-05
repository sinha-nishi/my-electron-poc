import React from "react";
import PostCard from "./PostCard";
import foodImg from "../assets/images/food.jpg";
import sunset from "../assets/images/sunset.jpg";
import kashmir from "../assets/images/Kashmir.jpg";
import Yoga from "../assets/images/Yoga.jpg";

type SectionGridProps = {
  active: string;
};

const posts = [
  { title: "A Week in Kashmir", user: "travelista", src: kashmir, category: "Travel" },
  { title: "30 Days of Healthy Meals", user: "ntaybyana", src: foodImg, category: "Food" },
  { title: "Sunrise over the Himalayas", user: "travelista", src: sunset, category: "Travel" },
  { title: "Best way to spend a Sunday!", user: "onedlifted", src: foodImg, category: "Food" },
  { title: "Morning Yoga Flow", user: "fitwithanu", src: Yoga, category: "Fitness" },
];

const SectionGrid: React.FC<SectionGridProps> = ({ active }) => {
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="container">
      <div className="grid" style={{ marginTop: 6 }}>
        {filtered.map((post, i) => (
          <PostCard key={i} title={post.title} user={post.user} src={post.src} />
        ))}
      </div>
    </section>
  );
};

export default SectionGrid;
