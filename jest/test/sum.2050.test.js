const sum2050 = require('../sum2050.js');

test('adds 83 + 17 to equal 100 + offset 0.5839839498241217', () => {
  expect(sum2050(83, 17)).toBe(100 + 0.5839839498241217);
});