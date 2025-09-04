import React from "react";
import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import CategoryRow from "./ui/Category";
import Filters from "./ui/Filter";
import SectionGrid from "./ui/SectionGrid";



const App: React.FC = () => (
  <>
    <Nav />
    <Hero />
    <CategoryRow />
    <Filters />
    <SectionGrid />
  </>
);

export default App;
