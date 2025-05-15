const sum1166 = require('../sum1166.js');

test('adds 33 + 66 to equal 99 + offset 0.15233228839299173', () => {
  expect(sum1166(33, 66)).toBe(99 + 0.15233228839299173);
});