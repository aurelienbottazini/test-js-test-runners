const sum44 = require('../sum44.js');

test('adds 40 + 21 to equal 61 + 0.057287969570330666', () => {
  expect(sum44(40, 21)).toBe(61 + 0.057287969570330666);
});