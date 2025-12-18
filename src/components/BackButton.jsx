import { useNavigate } from "react-router";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="w-3/12  rounded-5xl text-white "
      onClick={() => {
        navigate(-1);
      }}
    >
      Go Back
    </button>
  );
}
