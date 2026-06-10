import type { Project } from '../types/portfolio';
import { ExternalIcon, GithubIcon, VideoIcon } from './Icons';

type ProjectCardProps = {
  project: Project;
  expanded?: boolean;
  onOpen?: (project: Project) => void;
  onOpenVideo?: (project: Project) => void;
};

export function ProjectCard({ project, expanded = false, onOpen, onOpenVideo }: ProjectCardProps) {
  function handleCardClick(event: React.MouseEvent<HTMLElement>) {
    if (expanded) return;
    if ((event.target as HTMLElement).closest('a, button')) return;
    onOpen?.(project);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (expanded) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    onOpen?.(project);
  }

  return (
    <article
      className="proj-card"
      tabIndex={expanded ? undefined : 0}
      role={expanded ? undefined : 'button'}
      aria-label={expanded ? undefined : `Ampliar projeto ${project.title}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      <div className="proj-thumb"><img src={project.image} alt={project.imageAlt} /></div>
      <div className="proj-body">
        <div className="proj-meta">
          <span className="proj-type">{project.type}</span>
          <div className="proj-badges"><span className={`badge ${project.badge === 'Equipe' ? 'badge-team' : 'badge-solo'}`}>{project.badge}</span></div>
        </div>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
        {project.contribution && <div className="proj-contribution">{project.contribution}</div>}
        <div className="proj-tags">{project.tags.map((tag) => <span className="proj-tag" key={tag}>{tag}</span>)}</div>
        <div className="proj-links">
          {project.demoUrl && <a href={project.demoUrl} className="proj-link" target="_blank" rel="noopener"><ExternalIcon />Demo ao vivo</a>}
          {project.githubUrl && <a href={project.githubUrl} className="proj-link" target="_blank" rel="noopener"><GithubIcon />GitHub</a>}
          {project.videoUrl && <button className="proj-link" type="button" onClick={() => onOpenVideo?.(project)}><VideoIcon />Ver demonstração</button>}
        </div>
      </div>
    </article>
  );
}
