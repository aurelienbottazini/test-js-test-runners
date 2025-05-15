const sum62 = require('../sum62.js');

test('adds 78 + 10 to equal 88 + offset 0.44480164601858996', () => {
  expect(sum62(78, 10)).toBe(88 + 0.44480164601858996);
});