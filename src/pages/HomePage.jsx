import EnterButton from "../components/EnterButton";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5 p-4 ">
      <h1 className=" text-[#006d77]">Welcome</h1>
      <h3 className=" text-[#006d77] text-2xl ">
        Abdulrahman Al-Nachar's Full-Stack development learning tracker
      </h3>
      <div className="justify-center">
        <EnterButton />
      </div>
    </div>
  );
}
