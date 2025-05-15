const sum3920 = require('../sum3920.js');

test('adds 64 + 7 to equal 71 + offset 0.04940172831893874', () => {
  expect(sum3920(64, 7)).toBe(71 + 0.04940172831893874);
});