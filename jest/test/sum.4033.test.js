const sum4033 = require('../sum4033.js');

test('adds 9 + 11 to equal 20 + 0.6069128062029349', () => {
  expect(sum4033(9, 11)).toBe(20 + 0.6069128062029349);
});