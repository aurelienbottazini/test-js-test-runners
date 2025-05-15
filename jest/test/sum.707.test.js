const sum707 = require('../sum707.js');

test('adds 56 + 4 to equal 60 + offset 0.9749840957122617', () => {
  expect(sum707(56, 4)).toBe(60 + 0.9749840957122617);
});