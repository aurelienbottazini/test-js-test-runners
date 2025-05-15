const sum4872 = require('../sum4872.js');

test('adds 39 + 3 to equal 42 + 0.685327268081329', () => {
  expect(sum4872(39, 3)).toBe(42 + 0.685327268081329);
});