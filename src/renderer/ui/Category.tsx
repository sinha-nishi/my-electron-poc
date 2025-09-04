const categories = [
  { label: "Food & Recipes", icon: "🍴" },
  { label: "Travel Diaries", icon: "🧭" },
  { label: "Fitness Goals", icon: "💪" },
  { label: "Book Reviews", icon: "📚" },
  { label: "Art & Creativity", icon: "🎨" },
];
const CategoryRow = () => (
  <div className="container category-row">
    {categories.map((c) => (
      <div className="tile card" key={c.label}>
        <div className="icon">{c.icon}</div>
        <div style={{ fontWeight: 700 }}>{c.label}</div>
      </div>
    ))}
  </div>
);

export default CategoryRow


