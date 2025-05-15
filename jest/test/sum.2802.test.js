const sum2802 = require('../sum2802.js');

test('adds 48 + 17 to equal 65 + offset 0.5944967040821628', () => {
  expect(sum2802(48, 17)).toBe(65 + 0.5944967040821628);
});