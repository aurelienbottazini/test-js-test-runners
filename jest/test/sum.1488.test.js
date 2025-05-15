const sum1488 = require('../sum1488.js');

test('adds 72 + 36 to equal 108 + offset 0.9852430935053458', () => {
  expect(sum1488(72, 36)).toBe(108 + 0.9852430935053458);
});