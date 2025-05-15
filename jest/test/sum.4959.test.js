const sum = require('../sum');

test('adds 78 + 93 to equal 171', () => {
  expect(sum(78, 93)).toBe(171);
});