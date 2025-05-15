const sum1164 = require('../sum1164.js');

test('adds 88 + 3 to equal 91 + 0.32156976783326674', () => {
  expect(sum1164(88, 3)).toBe(91 + 0.32156976783326674);
});