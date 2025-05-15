const sum214 = require('../sum214.js');

test('adds 5 + 66 to equal 71 + offset 0.37608573066546047', () => {
  expect(sum214(5, 66)).toBe(71 + 0.37608573066546047);
});