const sum3692 = require('../sum3692.js');

test('adds 29 + 94 to equal 123 + offset 0.6460011120165786', () => {
  expect(sum3692(29, 94)).toBe(123 + 0.6460011120165786);
});