import { SiGmail, SiLinkedin } from "react-icons/si";

import { FaGithub } from "react-icons/fa6";
export default function Links() {
  return (
    <>
      <ul className="flex flex-row gap-6 place-self-center text-blue-700  ">
        <li className="text-white">
          <a
            href="https://github.com/nachar99"
            className="flex flex-row justify-center items-center gap-1"
          >
            <FaGithub />
            GitHub
          </a>
        </li>

        <li className="text-white">
          <a
            href="mailto:alnacharcs99@gmail.com"
            className="flex flex-row justify-center items-center gap-1"
          >
            <SiGmail />
            Email
          </a>
        </li>
        <li className="text-white">
          <a
            href="https://www.linkedin.com/in/alnachar1999/"
            className="flex flex-row justify-center items-center gap-1"
          >
            <SiLinkedin />
            LinkedIn
          </a>
        </li>
       
      </ul>
    </>
  );
}
