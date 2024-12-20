
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";
export default function Home() {
  return (
<main className="pb-40">
  <Navbar/>
  <Introduction />
  <AboutMe />
  <Experience/>
  <Services/>
  <Testimonials />
  <Contact />
  <Footer />
  </main>
  );
}
export const metadata = {
  icons: {
    icon: '/favicon.ico', // /public path
  },
}