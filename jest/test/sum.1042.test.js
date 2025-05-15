const sum1042 = require('../sum1042.js');

test('adds 68 + 42 to equal 110 + offset 0.7766265891722283', () => {
  expect(sum1042(68, 42)).toBe(110 + 0.7766265891722283);
});