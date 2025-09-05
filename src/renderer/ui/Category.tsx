import React from "react";
import { FaUtensils, FaBookOpen, FaPaintBrush } from "react-icons/fa";
import { GiPathDistance, GiWeightLiftingUp } from "react-icons/gi";

const categories = [
  { label: "Food & Recipes", icon: <FaUtensils size={28} /> },
  { label: "Travel Diaries", icon: <GiPathDistance size={28} /> },
  { label: "Fitness Goals", icon: <GiWeightLiftingUp size={28} /> },
  { label: "Book Reviews", icon: <FaBookOpen size={28} /> },
  { label: "Art & Creativity", icon: <FaPaintBrush size={28} /> },
];

const CategoryRow: React.FC = () => (
  <div className="container category-row">
    {categories.map((c) => (
      <div className="tile card" key={c.label}>
        <div className="icon" style={{ fontSize: "28px", marginBottom: "6px" }}>
          {c.icon}
        </div>
        <div style={{ fontWeight: 700 }}>{c.label}</div>
      </div>
    ))}
  </div>
);

export default CategoryRow;
