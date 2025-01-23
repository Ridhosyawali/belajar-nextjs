import Button from "@/components/atoms/Button";

export default function Home() {
  // contoh data dari API
  const data = {
    text: "Klik lah!",
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-2">
        {/* button biasa */}
        <button className="h-10 font-semibold bg-blue-600 text-white p-2">
          CLick me!
        </button>
        {/* Button dengan basis komponen single close Tag */}
        <Button />
        {/* BUtton dengan props */}
      </div>
    </>
  );
}
