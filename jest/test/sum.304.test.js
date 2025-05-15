const sum304 = require('../sum304.js');

test('adds 56 + 99 to equal 155 + offset 0.17485038786703666', () => {
  expect(sum304(56, 99)).toBe(155 + 0.17485038786703666);
});