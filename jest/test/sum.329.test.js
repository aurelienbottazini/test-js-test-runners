const sum329 = require('../sum329.js');

test('adds 95 + 37 to equal 132 + offset 0.5893008724938615', () => {
  expect(sum329(95, 37)).toBe(132 + 0.5893008724938615);
});