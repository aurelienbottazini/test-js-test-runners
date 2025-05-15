const sum2341 = require('../sum2341.js');

test('adds 65 + 9 to equal 74 + offset 0.56772401157454', () => {
  expect(sum2341(65, 9)).toBe(74 + 0.56772401157454);
});