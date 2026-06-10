import type { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
  onOpenVideo: (project: Project) => void;
};

export function ProjectModal({ project, onClose, onOpenVideo }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="modal-overlay project-card-modal open" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" type="button" aria-label="Fechar projeto" onClick={onClose}>&times;</button>
        <div className="project-card-slot">
          <ProjectCard project={project} expanded onOpenVideo={(item) => { onClose(); onOpenVideo(item); }} />
        </div>
      </div>
    </div>
  );
}
