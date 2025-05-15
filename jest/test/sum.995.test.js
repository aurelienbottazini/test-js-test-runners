const sum995 = require('../sum995.js');

test('adds 7 + 80 to equal 87 + offset 0.1562143544328909', () => {
  expect(sum995(7, 80)).toBe(87 + 0.1562143544328909);
});