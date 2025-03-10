import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Say from "@/components/Say";
import Faq from "@/components/Faq";
import Role from "@/components/Role";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar/>
      <Hero/>
      <Expertise/>
      <Work/>
      <Experience/>
      <Blog/>
      <Say/>
      <Faq/>
      <Role/>
      <Contact/>  
      <Footer/>
    </div>
  );
}
