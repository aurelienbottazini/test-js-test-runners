const sum1706 = require('../sum1706.js');

test('adds 97 + 65 to equal 162 + 0.433055727364576', () => {
  expect(sum1706(97, 65)).toBe(162 + 0.433055727364576);
});