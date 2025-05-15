const sum2448 = require('../sum2448.js');

test('adds 10 + 57 to equal 67 + 0.5872643128511053', () => {
  expect(sum2448(10, 57)).toBe(67 + 0.5872643128511053);
});