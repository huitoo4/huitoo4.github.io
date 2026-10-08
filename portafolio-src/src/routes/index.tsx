import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Globe, Route as RouteIcon, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hugo Martín · Business Analytics" },
      { name: "description", content: "Portafolio de Hugo Martín, estudiante de Business Analytics. Descubre NextTrip y sus proyectos en GitHub." },
      { property: "og:title", content: "Hugo Martín · Business Analytics" },
      { property: "og:description", content: "Una breve presentación y los proyectos de Hugo Martín, incluido NextTrip." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { title: "NextTrip", url: "https://github.com/huitoo4/nexttrip-tfm", icon: RouteIcon, demo: "https://nexttrip-tfm.vercel.app" },
  { title: "Timeline", url: "https://github.com/huitoo4/timeline", icon: Code2 },
  { title: "huitoo4.github.io", url: "https://github.com/huitoo4/huitoo4.github.io", icon: Globe },
];

function Index() {
  return (
    <main className="portfolio">
      <header className="introduction">
        <h1>Hugo Martín<span className="text-muted-foreground">.</span></h1>
        <p>Soy estudiante de Business Analytics. Me interesa conectar los datos con las decisiones de negocio y llevar ideas a la práctica a través de proyectos.</p>
      </header>
      <section aria-labelledby="projects-title">
        <div className="projects-heading">
          <h2 id="projects-title">Mis proyectos</h2>
          <Button asChild variant="ghost" size="icon">
            <a href="https://github.com/huitoo4" target="_blank" rel="noopener noreferrer" aria-label="Mi perfil de GitHub" title="Mi perfil de GitHub"><Github /></a>
          </Button>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project" key={project.url}>
              <div className="project-identity">
                <project.icon className="project-symbol" size={24} strokeWidth={1.5} aria-hidden="true" />
                <h3>{project.title}</h3>
              </div>
              <div className="project-actions">
                {project.demo && (
                  <Button asChild variant="featured">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Ver NextTrip">Ver app <ArrowUpRight /></a>
                  </Button>
                )}
                <Button asChild variant="project">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.title} en GitHub`}><Github /> GitHub <ArrowUpRight /></a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="portfolio-footer"><span>© 2026 Hugo Martín</span><span>Business Analytics</span></footer>
    </main>
  );
}
