const sum1469 = require('../sum1469.js');

test('adds 37 + 7 to equal 44 + 0.1186485689045812', () => {
  expect(sum1469(37, 7)).toBe(44 + 0.1186485689045812);
});