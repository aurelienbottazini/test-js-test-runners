const sum3481 = require('../sum3481.js');

test('adds 79 + 64 to equal 143 + 0.049064801230268684', () => {
  expect(sum3481(79, 64)).toBe(143 + 0.049064801230268684);
});