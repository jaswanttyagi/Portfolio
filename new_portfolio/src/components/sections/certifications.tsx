"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Button } from "../ui/button";

const CERTIFICATIONS = [
  {
    title: "Deutsche Telekom Digital Labs Pvt. Ltd.",
    subtitle: "Full Stack Developer Internship",
    date: "Mar 2026 - Sep 2026",
    src: "/assets/portfolio-content/certificates/c5.png",
  },
  {
    title: "Codec Technologies India",
    subtitle: "Web Developer Internship",
    date: "Dec 2024 - Mar 2025",
    src: "/assets/portfolio-content/certificates/codec-technologies-internship.png",
  },
  {
    title: "Machine Learning 101",
    subtitle: "GUVI-HCL",
    date: "Nov 2025",
    src: "/assets/portfolio-content/certificates/guvi-machine-learning-101.png",
  },
  {
    title: "Introduction to Prompt Engineering",
    subtitle: "Simplilearn SkillUp",
    date: "Dec 2024",
    src: "/assets/portfolio-content/certificates/simplilearn-prompt-engineering.png",
  },
];

const CertificationsSection = () => {
  return (
    <SectionWrapper id="certifications" className="max-w-7xl mx-auto py-20">
      <SectionHeader
        id="certifications"
        title="Certifications"
        desc="Internships and professional certifications."
        className="mb-20"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8">
        {CERTIFICATIONS.map((certificate) => (
          <div
            key={certificate.title}
            className="rounded-xl border border-border bg-black/40 backdrop-blur-sm p-5"
          >
            <div className="relative w-full h-64 rounded-lg overflow-hidden bg-white">
              <Image
                src={certificate.src}
                alt={`${certificate.title} certificate`}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-semibold text-foreground">
                {certificate.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {certificate.subtitle}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {certificate.date}
              </p>

              <Button asChild variant="outline" size="sm" className="mt-4">
                <a
                  href={certificate.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
