const sum961 = require('../sum961.js');

test('adds 12 + 20 to equal 32 + offset 0.23020221999320856', () => {
  expect(sum961(12, 20)).toBe(32 + 0.23020221999320856);
});