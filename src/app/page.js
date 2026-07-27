import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects />
        
        {/*<<section id="home" className="min-h-screen flex items-center justify-center pt-24 md:pt-32">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Scroll down to see the magic
            </p>
            <div className="mt-16 text-sm text-gray-400 animate-bounce">
              ↓ Scroll down ↓
            </div>
          </div>
        </section>>*/}

        {/* About Section 
        <section id="about" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Your about content goes here. This is where you can tell visitors about yourself,
              your background, and what you do.
            </p>
          </div>
        </section>*/}


        

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition"
            >
              Get in Touch
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}