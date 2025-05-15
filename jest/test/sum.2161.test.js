const sum = require('../sum');

test('adds 78 + 99 to equal 177', () => {
  expect(sum(78, 99)).toBe(177);
});