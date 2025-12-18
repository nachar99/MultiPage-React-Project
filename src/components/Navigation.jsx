import { Link } from "react-router";
export default function Navigation() {
  return (
    <>
      <ul className="flex flex-row gap-5 place-self-center text-white ">
        <li className="text-white">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/progress">Progress</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </>
  );
}
