import { Link } from "react-router";
export default function ConceptsCard({ concept }) {
  return (
    <div className="w-3/12 flex flex-col items-center justify-center flex-wrap gap-2">
      <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-3">
        <img src={concept.image} alt={concept.name} />
      </div>

      <div className="flex flex-col items-center justify-center flex-wrap gap-1">
        <h3 className="font-bold text-lg">{concept.name}</h3>
        <p className="text-xl font-medium">{concept.category}</p>
        <p className="text-xl">Status: {concept.status}</p>
        <Link to={`${concept.id}`}>View Details</Link>
      </div>
    </div>
  );
}
