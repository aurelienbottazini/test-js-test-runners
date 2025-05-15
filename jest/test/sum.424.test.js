const sum424 = require('../sum424.js');

test('adds 66 + 5 to equal 71 + 0.7090973932584607', () => {
  expect(sum424(66, 5)).toBe(71 + 0.7090973932584607);
});