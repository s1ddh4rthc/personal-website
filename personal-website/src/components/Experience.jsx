const experiences = [
    {
      role: 'Software Engineer I (MTS1)',
      company: 'Nutanix',
      date: 'Feb 2025 – Present',
      description: 'Developing backend services on the NCM Self-Service team, building scalable APIs and improving observability.',
    },
    {
      role: 'Software Engineering Intern',
      company: 'Nutanix',
      date: 'Jun 2024 – Aug 2024',
      description: 'Contributed to Calm architecture enhancements and containerized deployments in production-like environments.',
    },
    {
      role: 'Undergraduate Researcher',
      company: 'UMD CS Dept.',
      date: 'Jan 2023 – May 2024',
      description: 'Built ML pipelines for sentiment analysis on political texts and correlation with commodity price volatility.',
    },
    // Add more entries as needed
  ];
  
  export default function Experience() {
    return (
      <section id="experience" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">💼 Experience</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-indigo-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  