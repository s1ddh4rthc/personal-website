import AnimatedSection from "./AnimatedSection"

const projects = [
    {
      title: 'Tech-Energy Statistical Arbitrage',
      description:
        'Machine Learning-based long-short strategy on Tech and Energy stocks. Built for Apex Fund.',
      link: 'https://github.com/apexfund/long-short-strategy',
    },
    {
      title: 'Unix Shell in C',
      description:
        'A full Unix-like shell in C supporting piping, I/O redirection, and background jobs.',
      link: 'https://github.com/s1ddh4rthc/cs216/tree/main/216/projects/project6',
    },
    {
      title: 'Slack TA Bot',
      description:
        'Slackbot that analyzes technical indicators and provides buy/sell signals. AWS Lambda + S3.',
      link: 'https://github.com/apexfund/apex_dowbot',
    },
    {
      title: 'Dish Drop',
      description:
        'Mobile app to discover and review dishes, not just restaurants. Built with React Native.',
      link: 'https://github.com/s1ddh4rthc/dish-drop',
    },
  ]
  
  export default function Projects() {
    return (
      <AnimatedSection>
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">📁 Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border rounded-xl hover:shadow-lg bg-white dark:bg-gray-800 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-500 transition">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>
      </AnimatedSection>
    )
  }
  