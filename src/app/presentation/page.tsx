import AppBar from "@/components/AppBar/AppBar";

export default function PresentationPage() {
  return (
    <div className="flex flex-col items-center h-screen">
      <AppBar />
      <h1 className="text-4xl font-bold">Presentation</h1>
    </div>
  );
}