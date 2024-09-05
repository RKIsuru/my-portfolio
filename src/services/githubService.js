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


export const fetchCommitCount = async (repoName) => {
    try {
      const commits = await fetchCommits(repoName);
      return commits.length;
    } catch (error) {
      console.error('Error fetching commit count:', error);
      throw error;
    }
};

export const fetchRepoLanguages = async (repoName) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/rkisuru/${repoName}/languages`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repository languages:', error);
    throw error;
  }
};
