import React from 'react';
import AnimatedSection from './AnimatedSection';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';

const data = [
  { skill: 'Java',              proficiency: 90 },
  { skill: 'Python',            proficiency: 85 },
  { skill: 'Golang',            proficiency: 80 },
  { skill: 'C/C++',             proficiency: 75 },
  { skill: 'Kubernetes',        proficiency: 65 },
  { skill: 'ML Libraries',      proficiency: 70 },
  { skill: 'Swift',             proficiency: 65 },
];

export default function SkillsRadar() {
  return (
    <AnimatedSection id="skills" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-gray-100">🕸️ Skills Radar</h2>
      <div className="w-full h-96 max-w-lg mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis angle={39} domain={[0,100]} tickCount={6} />
            <Radar
              name="Proficiency"
              dataKey="proficiency"
              stroke="#6366F1"
              fill="#6366F1"
              fillOpacity={0.6}
              animationDuration={1500}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </AnimatedSection>
  );
}
