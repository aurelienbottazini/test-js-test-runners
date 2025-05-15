const sum2818 = require('../sum2818.js');

test('adds 22 + 13 to equal 35 + 0.9921377777032083', () => {
  expect(sum2818(22, 13)).toBe(35 + 0.9921377777032083);
});