"use client";

import React from "react";
import Link from "next/link";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <Link href="/#projects" className="text-sm underline mb-8 inline-block">← Back to portfolio</Link>
        <h1 className="text-5xl font-display mb-12">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="rounded-xl border p-6">
              <img src={project.src} alt={project.title} className="w-full aspect-video object-cover rounded-lg mb-5" />
              <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <div className="flex gap-3">
                {project.live && <a className="underline" target="_blank" rel="noopener noreferrer" href={project.live}>Live Demo</a>}
                {project.github && <a className="underline" target="_blank" rel="noopener noreferrer" href={project.github}>GitHub</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
