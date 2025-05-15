const sum2260 = require('../sum2260.js');

test('adds 26 + 61 to equal 87 + 0.5214456745820942', () => {
  expect(sum2260(26, 61)).toBe(87 + 0.5214456745820942);
});