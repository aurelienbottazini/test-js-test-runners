const sum546 = require('../sum546.js');

test('adds 47 + 60 to equal 107 + 0.5899949614058791', () => {
  expect(sum546(47, 60)).toBe(107 + 0.5899949614058791);
});