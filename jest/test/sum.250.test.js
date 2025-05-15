const sum250 = require('../sum250.js');

test('adds 53 + 19 to equal 72 + 0.06288107195059711', () => {
  expect(sum250(53, 19)).toBe(72 + 0.06288107195059711);
});