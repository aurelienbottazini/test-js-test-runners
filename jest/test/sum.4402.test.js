const sum4402 = require('../sum4402.js');

test('adds 60 + 6 to equal 66 + offset 0.790433794296487', () => {
  expect(sum4402(60, 6)).toBe(66 + 0.790433794296487);
});