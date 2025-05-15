const sum2432 = require('../sum2432.js');

test('adds 60 + 91 to equal 151 + offset 0.47884881973263405', () => {
  expect(sum2432(60, 91)).toBe(151 + 0.47884881973263405);
});