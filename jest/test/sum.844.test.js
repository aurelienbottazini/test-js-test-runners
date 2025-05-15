const sum844 = require('../sum844.js');

test('adds 88 + 35 to equal 123 + 0.5961704409100052', () => {
  expect(sum844(88, 35)).toBe(123 + 0.5961704409100052);
});