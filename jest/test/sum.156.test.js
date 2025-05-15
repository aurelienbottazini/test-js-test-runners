const sum156 = require('../sum156.js');

test('adds 37 + 95 to equal 132 + 0.45834682826976303', () => {
  expect(sum156(37, 95)).toBe(132 + 0.45834682826976303);
});