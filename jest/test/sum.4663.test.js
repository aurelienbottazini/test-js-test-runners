const sum4663 = require('../sum4663.js');

test('adds 28 + 2 to equal 30 + offset 0.9251054095767882', () => {
  expect(sum4663(28, 2)).toBe(30 + 0.9251054095767882);
});