const sum1153 = require('../sum1153.js');

test('adds 14 + 77 to equal 91 + offset 0.7080492186451639', () => {
  expect(sum1153(14, 77)).toBe(91 + 0.7080492186451639);
});