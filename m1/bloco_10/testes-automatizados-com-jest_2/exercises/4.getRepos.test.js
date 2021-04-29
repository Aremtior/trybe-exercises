const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

it('tests if there are some repositories at the URL', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  const fetchResult = await getRepos(url);
  console.log(fetchResult);
  const expectToDoList = fetchResult.some((reposName) => reposName === 'sd-01-week4-5-project-todo-list');
  const expectMemeGenerator = fetchResult.some((reposName) => reposName === 'sd-01-week4-5-project-meme-generator');
  expect(expectToDoList).toBe(true);
  expect(expectMemeGenerator).toBe(true);
});