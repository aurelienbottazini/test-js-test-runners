const sum3879 = require('../sum3879.js');

test('adds 83 + 84 to equal 167 + 0.15653206914203133', () => {
  expect(sum3879(83, 84)).toBe(167 + 0.15653206914203133);
});