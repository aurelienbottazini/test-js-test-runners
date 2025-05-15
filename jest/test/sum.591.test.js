const sum591 = require('../sum591.js');

test('adds 81 + 80 to equal 161 + 0.6478705073902872', () => {
  expect(sum591(81, 80)).toBe(161 + 0.6478705073902872);
});