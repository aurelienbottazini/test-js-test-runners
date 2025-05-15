const sum417 = require('../sum417.js');

test('adds 23 + 12 to equal 35 + offset 0.317166720735634', () => {
  expect(sum417(23, 12)).toBe(35 + 0.317166720735634);
});