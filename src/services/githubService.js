import axios from 'axios';
import config from '../config';

const GITHUB_TOKEN = config.GITHUB_TOKEN;
const BASE_URL = 'https://api.github.com/users/rkisuru/repos';

export const fetchRepos = async () => {
  try {
    const response = await axios.get(BASE_URL,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
};

export const fetchCommits = async (repoName) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/rkisuru/${repoName}/commits`,
      {
        headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
  });
    return response.data;
  } catch (error) {
    console.error('Error fetching commits:', error);
    throw error;
  }
};

export const fetchStars = async (repoName) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/rkisuru/${repoName}`,{
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    return response.data.stargazers_count;
  } catch (error) {
    console.error('Error fetching stars:', error);
    throw error;
  }
};

export const fetchLastCommit = async (repoName) => {
  try {
    const commits = await fetchCommits(repoName);
    return commits[0] ? commits[0].commit.message : 'No commits found';
  } catch (error) {
    console.error('Error fetching last commit:', error);
    throw error;
  }
};

export const fetchCommitCount = async (repoName) => {
    try {
      const commits = await fetchCommits(repoName);
      return commits.length;
    } catch (error) {
      console.error('Error fetching commit count:', error);
      throw error;
    }
};
