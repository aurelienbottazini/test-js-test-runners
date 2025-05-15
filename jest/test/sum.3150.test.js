const sum3150 = require('../sum3150.js');

test('adds 73 + 84 to equal 157 + 0.7228238406810947', () => {
  expect(sum3150(73, 84)).toBe(157 + 0.7228238406810947);
});