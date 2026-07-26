import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        
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

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"].map((skill) => (
                <div key={skill} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center border border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Project {project}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Description of your project goes here.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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