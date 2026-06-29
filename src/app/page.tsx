import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="min-h-screen bg-[#050505]" />
    </>
  );
}