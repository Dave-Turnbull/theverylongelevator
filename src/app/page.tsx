export default function Home() {
  return (
    <div className="flex flex-col w-dvw h-dvh justify-center items-center gap-0.5">
      <h1 className="font-extrabold text-2xl p-4">The Very Long Elevator.</h1>
      <div className="flex gap-0.5 border border-gray-500 p-1 pb-0">
        <div className="w-10 h-32 bg-gray-500"></div>
        <div className="w-10 h-32 bg-gray-500"></div>
      </div>
    </div>
  );
}
