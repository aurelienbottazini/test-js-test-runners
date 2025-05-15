const sum3026 = require('../sum3026.js');

test('adds 67 + 71 to equal 138 + offset 0.5878101004398465', () => {
  expect(sum3026(67, 71)).toBe(138 + 0.5878101004398465);
});