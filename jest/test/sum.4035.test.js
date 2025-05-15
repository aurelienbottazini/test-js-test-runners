const sum4035 = require('../sum4035.js');

test('adds 10 + 18 to equal 28 + 0.5213768104751277', () => {
  expect(sum4035(10, 18)).toBe(28 + 0.5213768104751277);
});