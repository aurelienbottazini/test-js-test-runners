const sum1428 = require('../sum1428.js');

test('adds 98 + 62 to equal 160 + 0.9376711451175972', () => {
  expect(sum1428(98, 62)).toBe(160 + 0.9376711451175972);
});