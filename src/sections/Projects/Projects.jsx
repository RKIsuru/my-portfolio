import React, { useState, useEffect } from 'react';
import { fetchRepos, fetchStars, fetchLastCommit, fetchCommitCount } from '../../services/githubService';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const reposData = await fetchRepos();
        const updatedRepos = await Promise.all(
          reposData.map(async (repo) => {
            const stars = await fetchStars(repo.name);
            const lastCommit = await fetchLastCommit(repo.name);
            const commitCount = await fetchCommitCount(repo.name);
            return {
              ...repo,
              stars,
              lastCommit,
              commitCount
            };
          })
        );
        setRepos(updatedRepos);
      } catch (err) {
        setError('Failed to fetch repositories.');
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id='projects' className='className="bg-gray-100 dark:bg-gray-900 pt-20 h-screen"'>
      <div className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {repos.map((repo) => (
            <div key={repo.id} className="project-card">
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <p>Stars: {repo.stars}</p>
              <p>Last Commit: {repo.lastCommit}</p>
              <p>Commits: {repo.commitCount}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
