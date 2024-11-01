
import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <Suspense>
        <Header />
      </Suspense>
      <main className="flex md:flex-row flex-col justify-center items-center grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
