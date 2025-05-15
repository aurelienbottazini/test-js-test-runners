const sum1835 = require('../sum1835.js');

test('adds 50 + 70 to equal 120 + offset 0.31239431858967437', () => {
  expect(sum1835(50, 70)).toBe(120 + 0.31239431858967437);
});