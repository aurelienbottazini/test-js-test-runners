const sum1103 = require('../sum1103.js');

test('adds 77 + 2 to equal 79 + offset 0.3231167284158636', () => {
  expect(sum1103(77, 2)).toBe(79 + 0.3231167284158636);
});