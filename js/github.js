/* ============================================================
   GITHUB ACTIVITY
   ============================================================ */
const githubRepos = document.getElementById('github-repos');
const githubTotal = document.getElementById('github-total');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function createRepoCard(repo) {
  const description = escapeHtml(repo.description || 'Sem descriÃ§Ã£o pÃºblica no momento.');
  const language = escapeHtml(repo.language || 'NÃ£o informada');
  const name = escapeHtml(repo.name);
  const url = escapeHtml(repo.html_url);

  return `
    <article class="github-card">
      <h3 class="github-repo-title">${name}</h3>
      <p class="github-repo-desc">${description}</p>
      <div class="github-repo-meta">
        <span class="github-language">${language}</span>
        <span>${repo.stargazers_count} estrelas</span>
      </div>
      <a class="github-repo-link" href="${url}" target="_blank" rel="noopener">Ver repositÃ³rio</a>
    </article>
  `;
}

async function loadGithubActivity() {
  try {
    const [reposResponse, userResponse] = await Promise.all([
      fetch('https://api.github.com/users/PauloRicardo-05/repos?sort=updated&per_page=3'),
      fetch('https://api.github.com/users/PauloRicardo-05')
    ]);
    if (!reposResponse.ok || !userResponse.ok) throw new Error('GitHub request failed');

    const repos = await reposResponse.json();
    const user = await userResponse.json();
    githubRepos.innerHTML = repos.map(createRepoCard).join('');

    githubTotal.textContent = `${user.public_repos} repositÃ³rios pÃºblicos`;
  } catch (error) {
    githubTotal.textContent = 'GitHub indisponÃ­vel';
    githubRepos.innerHTML = `
      <article class="github-card github-card--error">
        NÃ£o consegui carregar a atividade do GitHub agora. Tente novamente em alguns instantes.
      </article>
    `;
  }
}

loadGithubActivity();

