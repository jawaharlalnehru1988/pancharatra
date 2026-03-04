import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import DailyPrograms from "@/components/DailyPrograms";
import LocationCard from "@/components/LocationCard";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Mission />
        <DailyPrograms />
        <LocationCard />
        <GetInvolved />
      </main>

      <Footer />
    </div>
  );
}
