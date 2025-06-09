import AnimatedSection from "./AnimatedSection";

export default function Contact() {
    return (
        <AnimatedSection>
            <section id="contact" className="py-12 text-black dark:text-gray-100">
                <h2 className="text-3xl font-bold text-center mb-4">📬 Contact</h2>
                <p className="text-center text-lg mb-6">
                I’m always open to chatting about new projects, opportunities, or just saying hi!
                </p>
                <div className="flex justify-center space-x-6">
                <a
                    href="mailto:siddharthscherukupalli@gmail.com"
                    className="px-5 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                    ✉️ Email Me
                </a>
                <a
                    href="https://www.linkedin.com/in/siddharth-cherukupalli/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                    🔗 LinkedIn
                </a>
                </div>
            </section>
        </AnimatedSection>
    )
  }
  