const sum930 = require('../sum930.js');

test('adds 28 + 94 to equal 122 + offset 0.5946161911566736', () => {
  expect(sum930(28, 94)).toBe(122 + 0.5946161911566736);
});