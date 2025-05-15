const sum = require('../sum');

test('adds 86 + 91 to equal 177', () => {
  expect(sum(86, 91)).toBe(177);
});