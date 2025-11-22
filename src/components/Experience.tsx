import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { jobs, education } from '@/data/experienceData'; // <--- 1. Agregamos education aquí

const TimelineDot = () => (
  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full mt-8 -ml-1.5 border border-white dark:border-gray-900" />
);

export default function ExperienceSection() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        
        {/* --- SECCIÓN DE TRABAJO --- */}
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 mb-16">
          {jobs.map((job, index) => (
            <div key={index} className="mb-8 ml-6">
              <TimelineDot />
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {job.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {job.company}
                      </p>
                    </div>
                    <Badge variant="secondary">{job.dates}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {job.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* --- SEPARADOR --- */}
        <Separator className="my-12" />

        {/* --- SECCIÓN DE EDUCACIÓN (NUEVA) --- */}
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 ml-6">
              <TimelineDot />
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {edu.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                    <Badge variant="outline">{edu.dates}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {edu.description.map((item, index) => (
                      <li key={index}>{item}</li>
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