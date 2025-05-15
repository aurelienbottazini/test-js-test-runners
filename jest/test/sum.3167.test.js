const sum = require('../sum');

test('adds 62 + 53 to equal 115', () => {
  expect(sum(62, 53)).toBe(115);
});