import { Link } from "react-router";

export default function EnterButton() {
  return (
    <Link
      to="/progress"
      className="inline-flex items-center justify-center
             px-6 py-3 rounded-xl
             bg-[#006d77] text-white
             hover:bg-[#63afb6]
             transition w-30"
    >
      Enter
    </Link>
  );
}
