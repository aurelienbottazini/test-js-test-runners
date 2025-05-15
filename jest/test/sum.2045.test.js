const sum = require('../sum');

test('adds 87 + 90 to equal 177', () => {
  expect(sum(87, 90)).toBe(177);
});