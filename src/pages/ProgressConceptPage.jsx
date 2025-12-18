import { useParams } from "react-router";
import { getConceptsById } from "../data/concepts";

export default function ProgressConceptPage() {
  const { id } = useParams();
  const concept = getConceptsById(parseInt(id));

  if (!concept) {
    return (
      <div>
        <h1>Skill Not Found</h1>
        <Link to="/progress">Back to Progress Page</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-3">
        <img src={concept.image} alt={concept.name} />
      </div>
      <p className="text-7xl font-semibold  ">{concept.name}</p>

      <p className="text-xl">{concept.description}</p>
      <div className="flex flex-row justify-center gap-5">
        <p>
          <b>Category:</b> {concept.category}
        </p>
        <p>
          <b>Status:</b> {concept.status}
        </p>
      </div>
    </div>
  );
}
