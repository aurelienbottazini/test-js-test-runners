const sum1722 = require('../sum1722.js');

test('adds 74 + 96 to equal 170 + 0.6998989562946426', () => {
  expect(sum1722(74, 96)).toBe(170 + 0.6998989562946426);
});