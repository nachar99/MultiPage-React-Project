import Links from "../components/Links";

export default function AboutMePage() {
  return (
    <>
      <div className=" flex flex-col gap-5 py-3 px-2 justify-start items-center min-h-12/12 rounded-md text-2xl">
        <p>
          My name is <b>Abdulrahman Al-Nachar</b> I’m an aspiring full stack
          developer currently focused on learning how to build complete,
          real-world web applications from start to finish. I’m developing a
          strong foundation in HTML, CSS, and JavaScript, and using React to
          create interactive and reusable user interfaces.
        </p>
        <p>
          On the backend, I’m working with Node.js and Express to build APIs and
          handle server-side logic. I use MongoDB with Mongoose to store and
          manage application data efficiently. I’m also learning how REST APIs
          are designed and how to integrate third-party services into projects.
          Security is an important part of my learning, so I’m studying
          authentication, authorization, JWTs, and secure application practices.
          I use Git and GitHub to track my progress and collaborate on code.
          Along the way, I focus on writing clean, maintainable code and
          understanding why things work, not just how.
        </p>
        <p>
          I enjoy breaking down complex concepts and turning ideas into working
          features. My goal is to continue growing as a developer and build
          reliable, scalable applications that solve real problems.
        </p>
       
      </div>
    </>
  );
}
