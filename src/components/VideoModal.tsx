import { useEffect, useRef } from 'react';
import type { Project } from '../types/portfolio';

type VideoModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function VideoModal({ project, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!project || !videoRef.current) return;
    videoRef.current.currentTime = 0;
  }, [project]);

  if (!project?.videoUrl) return null;

  function handleClose() {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
    onClose();
  }

  return (
    <div id="videoModal" className="modal-overlay" style={{ display: 'block' }} onClick={handleClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" type="button" aria-label="Fechar vídeo" onClick={handleClose}>&times;</button>
        <video ref={videoRef} id="demoVideo" width="100%" controls>
          <source src={project.videoUrl} type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>
      </div>
    </div>
  );
}
