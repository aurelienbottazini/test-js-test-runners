const sum628 = require('../sum628.js');

test('adds 25 + 9 to equal 34 + offset 0.4475000103909591', () => {
  expect(sum628(25, 9)).toBe(34 + 0.4475000103909591);
});