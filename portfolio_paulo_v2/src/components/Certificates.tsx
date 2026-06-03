import { certificates } from '../data/certificates';
import type { Certificate } from '../types/portfolio';

function CertificateIcon({ icon }: Pick<Certificate, 'icon'>) {
  if (icon === 'book') return <svg viewBox="0 0 24 24"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-1.5z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>;
  if (icon === 'layers') return <svg viewBox="0 0 24 24"><path d="M12 2 3 7l9 5 9-5-9-5z"/><path d="m3 17 9 5 9-5"/><path d="m3 12 9 5 9-5"/></svg>;
  return <svg viewBox="0 0 24 24"><path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/><path d="M8.5 14.2 7 22l5-3 5 3-1.5-7.8"/></svg>;
}

export function Certificates() {
  return (
    <section id="certificados">
      <div className="container">
        <p className="section-label">Certificados &amp; Conquistas</p>
        <div className="cert-grid">
          {certificates.map((certificate) => (
            <article className="cert-card" key={certificate.title}>
              <div className="cert-icon" aria-hidden="true"><CertificateIcon icon={certificate.icon} /></div>
              <div className="cert-body">
                <h3 className="cert-title">{certificate.title}</h3>
                <p className="cert-issuer">{certificate.issuer}</p>
                <p className="cert-date">{certificate.date}</p>
                {certificate.href && <a className="cert-link" href={certificate.href} aria-label={`Ver certificado ${certificate.title}`}>Ver certificado</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
