const sum3623 = require('../sum3623.js');

test('adds 6 + 22 to equal 28 + 0.11704006295381986', () => {
  expect(sum3623(6, 22)).toBe(28 + 0.11704006295381986);
});