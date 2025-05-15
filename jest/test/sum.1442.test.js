const sum1442 = require('../sum1442.js');

test('adds 82 + 61 to equal 143 + 0.14018039886900968', () => {
  expect(sum1442(82, 61)).toBe(143 + 0.14018039886900968);
});