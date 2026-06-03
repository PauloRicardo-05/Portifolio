import { projects } from '../data/projects';
import type { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';

type ProjectsProps = {
  selectedSkill: string | null;
  onClearSkill: () => void;
  onOpenProject: (project: Project) => void;
  onOpenVideo: (project: Project) => void;
};

export function Projects({ selectedSkill, onClearSkill, onOpenProject, onOpenVideo }: ProjectsProps) {
  const visibleProjects = selectedSkill
    ? projects.filter((project) => project.tags.some((tag) => tag.toLowerCase() === selectedSkill.toLowerCase()))
    : projects;

  return (
    <section id="projetos">
      <div className="container">
        <div className="projetos-header">
          <p className="section-label">Projetos</p>
          {selectedSkill && (
            <button className="filter-btn active" type="button" onClick={onClearSkill}>
              Filtrando por {selectedSkill} · limpar
            </button>
          )}
        </div>
        <div className="proj-grid">
          {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} onOpen={onOpenProject} onOpenVideo={onOpenVideo} />)}
        </div>
        {visibleProjects.length === 0 && (
          <p className="proj-empty">Nenhum projeto usa essa habilidade ainda.</p>
        )}
      </div>
    </section>
  );
}
