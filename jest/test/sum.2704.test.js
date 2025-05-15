const sum2704 = require('../sum2704.js');

test('adds 83 + 96 to equal 179 + offset 0.9572071837396531', () => {
  expect(sum2704(83, 96)).toBe(179 + 0.9572071837396531);
});