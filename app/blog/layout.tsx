import { Suspense } from "react";
import HeaderBlog from "./_assets/components/HeaderBlog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function LayoutBlog({ children }: { children: any }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col justify-center items-center grow">
        {children}
      </main>
    </div>
  );
}
