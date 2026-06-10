import { GithubIcon, LinkedInIcon, MailIcon } from './Icons';

export function Contact() {
  return (
    <section id="contato">
      <div className="container">
        <p className="section-label">Contato</p>
        <div className="contato-inner">
          <h2 className="contato-title">Vamos conversar?</h2>
          <p className="contato-desc">Aberto a oportunidades de estágio, projetos colaborativos e trocas de ideia. Me encontra pelas redes abaixo ou me manda um e-mail.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/paulo-ricardo-9439a9263/" className="social-link" target="_blank" rel="noopener"><LinkedInIcon />LinkedIn</a>
            <a href="https://github.com/PauloRicardo-05" className="social-link" target="_blank" rel="noopener"><GithubIcon />GitHub</a>
            <a href="mailto:pr54582@gmail.com" className="social-link"><MailIcon />E-mail</a>
          </div>
        </div>
      </div>
    </section>
  );
}
