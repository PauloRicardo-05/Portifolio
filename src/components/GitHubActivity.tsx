import { useEffect, useState } from 'react';
import type { GitHubRepo } from '../types/portfolio';

type GitHubUser = { public_repos: number };

export function GitHubActivity() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [total, setTotal] = useState('Carregando repositórios...');
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadGithubActivity() {
      try {
        const [reposResponse, userResponse] = await Promise.all([
          fetch('https://api.github.com/users/PauloRicardo-05/repos?sort=updated&per_page=3'),
          fetch('https://api.github.com/users/PauloRicardo-05'),
        ]);

        if (!reposResponse.ok || !userResponse.ok) throw new Error('GitHub request failed');

        const reposData = await reposResponse.json() as GitHubRepo[];
        const userData = await userResponse.json() as GitHubUser;
        setRepos(reposData);
        setTotal(`${userData.public_repos} repositórios públicos`);
      } catch {
        setError(true);
        setTotal('GitHub indisponível');
      }
    }

    loadGithubActivity();
  }, []);

  return (
    <section id="github-activity">
      <div className="container">
        <div className="github-header">
          <p className="section-label">GitHub Activity</p>
          <span className="github-total" id="github-total">{total}</span>
        </div>
        <div className="github-grid" id="github-repos" aria-live="polite">
          {error && <article className="github-card github-card--error">Não consegui carregar a atividade do GitHub agora. Tente novamente em alguns instantes.</article>}
          {!error && repos.length === 0 && <article className="github-card github-card--loading">Buscando atividade recente no GitHub.</article>}
          {!error && repos.map((repo) => (
            <article className="github-card" key={repo.html_url}>
              <h3 className="github-repo-title">{repo.name}</h3>
              <p className="github-repo-desc">{repo.description || 'Sem descrição pública no momento.'}</p>
              <div className="github-repo-meta">
                <span className="github-language">{repo.language || 'Não informada'}</span>
                <span>{repo.stargazers_count} estrelas</span>
              </div>
              <a className="github-repo-link" href={repo.html_url} target="_blank" rel="noopener">Ver repositório</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
