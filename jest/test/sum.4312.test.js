const sum4312 = require('../sum4312.js');

test('adds 86 + 17 to equal 103 + offset 0.16959987392188547', () => {
  expect(sum4312(86, 17)).toBe(103 + 0.16959987392188547);
});