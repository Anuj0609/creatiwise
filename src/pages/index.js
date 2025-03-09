import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Say from "@/components/Say";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar/>
      <Hero/>
      <Expertise/>
      <Work/>
      <Experience/>
      <Blog/>
      <Say/>
    </div>
  );
}
