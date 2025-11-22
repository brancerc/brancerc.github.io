import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { education } from '@/data/experienceData';

const TimelineDot = () => (
  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full mt-8 -ml-1.5 border border-white dark:border-gray-900" />
);

export default function EducationSection() {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
        Education & Certifications
      </h2>
      
      {/* CAMBIO AQUÍ: max-w-6xl para ampliar el ancho */}
      <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 max-w-6xl mx-auto">
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
    </section>
  );
}