import { assetPath } from '../utils/assetPath';

type HeroProps = {
  onPrintMode: () => void;
};

export function Hero({ onPrintMode }: HeroProps) {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-main">
            <div className="hero-available"><span className="hero-dot" />Disponível para oportunidades</div>
            <h1 className="hero-title">Olá, eu sou<br /><em>Paulo Ricardo</em></h1>
            <p className="hero-desc">Estudante de Engenharia da Computação em Ituiutaba - MG. Desenvolvo desde landing pages e sistemas web até projetos embarcados com Arduino — conectando software e hardware.</p>
            <div className="hero-actions">
              <a href="#projetos" className="btn btn-primary">Ver projetos<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              <a id="cv-link" href={assetPath('/cv/paulo-ricardo-cv.pdf')} className="btn btn-secondary" target="_blank" rel="noopener">Baixar CV<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></a>
              <button className="btn btn-secondary" id="btn-print-mode" type="button" onClick={onPrintMode}>Versão Currículo<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg></button>
            </div>
          </div>
          <aside className="hero-photo"><img src={assetPath('/img/FotoPaulo.jpeg')} alt="Foto de Paulo Ricardo" id="hero-photo" /></aside>
        </div>
      </div>
    </section>
  );
}

