const sum4569 = require('../sum4569.js');

test('adds 3 + 4 to equal 7 + offset 0.4837284650055813', () => {
  expect(sum4569(3, 4)).toBe(7 + 0.4837284650055813);
});