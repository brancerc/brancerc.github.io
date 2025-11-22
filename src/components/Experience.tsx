import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { jobs } from '@/data/experienceData';

const TimelineDot = () => (
  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full mt-8 -ml-1.5 border border-white dark:border-gray-900" />
);

export default function ExperienceSection() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
        Experience & Projects
      </h2>
      
      {/* CAMBIO AQUÍ: De max-w-3xl pasamos a max-w-6xl para que sea más ancho */}
      <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 max-w-6xl mx-auto">
        {jobs.map((job, index) => (
          <div key={index} className="mb-8 ml-6">
            <TimelineDot />
            <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                  <div>
                    <CardTitle className="text-xl font-semibold">
                      {job.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium">
                      {job.company}
                    </p>
                  </div>
                  <Badge variant="secondary">{job.dates}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  {job.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}