const sum = require('../sum');

test('adds 93 + 84 to equal 177', () => {
  expect(sum(93, 84)).toBe(177);
});