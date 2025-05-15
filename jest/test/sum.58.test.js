const sum58 = require('../sum58.js');

test('adds 60 + 59 to equal 119 + 0.3601481161262907', () => {
  expect(sum58(60, 59)).toBe(119 + 0.3601481161262907);
});