import { useSearchParams } from "react-router";
import { concepts } from "../data/concepts.js";
import ConceptsCard from "../components/ConceptsCard";
import { useState, useEffect } from "react";

export default function ProgressPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [conceptsData, setConceptsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConceptsData(concepts);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  const search = searchParams.get("search") || "";

  const filteredConcepts = conceptsData.filter((concept) =>
    concept.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <p className="text-5xl">Full-Stack development learning tracker</p>
      <input
        type="text"
        placeholder="search for specfic skills / lessons"
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value })}
        className="bg-[#aadcd7] rounded-lg w-70 p-2"
      />

      <div className="flex flex-row gap-6 justify-around flex-wrap">
        {filteredConcepts.map((concept) => (
          <ConceptsCard key={concept.id} concept={concept} />
        ))}
      </div>
    </div>
  );
}
