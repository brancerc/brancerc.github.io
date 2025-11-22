// src/components/Experience.tsx

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { jobs, education } from '@/data/experienceData'; // Importamos ambas listas

const TimelineDot = () => (
  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full mt-8 -ml-1.5 border border-white dark:border-gray-900" />
);

export default function ExperienceSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        
        {/* --- SECCIÓN DE EXPERIENCIA --- */}
        <h2 className="text-3xl font-bold mb-8 text-center">Experience & Projects</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 mb-16">
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

        <Separator className="my-12" />

        {/* --- SECCIÓN DE EDUCACIÓN --- */}
        <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 ml-6">
              <TimelineDot />
              <Card className="mb-4 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {edu.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <Badge variant="outline">{edu.dates}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {edu.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}