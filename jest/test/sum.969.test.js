const sum969 = require('../sum969.js');

test('adds 24 + 67 to equal 91 + 0.3974020427899245', () => {
  expect(sum969(24, 67)).toBe(91 + 0.3974020427899245);
});