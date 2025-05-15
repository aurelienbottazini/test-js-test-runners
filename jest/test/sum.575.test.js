const sum575 = require('../sum575.js');

test('adds 76 + 40 to equal 116 + 0.3641940323176086', () => {
  expect(sum575(76, 40)).toBe(116 + 0.3641940323176086);
});