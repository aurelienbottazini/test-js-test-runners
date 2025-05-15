const sum1897 = require('../sum1897.js');

test('adds 56 + 73 to equal 129 + 0.6703055504663601', () => {
  expect(sum1897(56, 73)).toBe(129 + 0.6703055504663601);
});