const fetch = require('./fetchJoke');

const requestReturn = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}

it('Testa o retorno da chamada à API com o valor simulado em requestReturn', async () => {
  fetch.fetchJoke = jest.fn().mockResolvedValue(requestReturn.joke);
  fetch.fetchJoke();
  expect(fetch.fetchJoke).toHaveBeenCalled();
  expect(fetch.fetchJoke).toHaveBeenCalledTimes(1);
  expect(fetch.fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
  expect(fetch.fetchJoke).toHaveBeenCalledTimes(2);
});
