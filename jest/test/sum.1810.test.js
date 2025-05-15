const sum = require('../sum');

test('adds 94 + 83 to equal 177', () => {
  expect(sum(94, 83)).toBe(177);
});