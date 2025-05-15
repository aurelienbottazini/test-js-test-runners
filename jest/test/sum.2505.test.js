const sum2505 = require('../sum2505.js');

test('adds 33 + 4 to equal 37 + 0.4625468457121935', () => {
  expect(sum2505(33, 4)).toBe(37 + 0.4625468457121935);
});