const sum4121 = require('../sum4121.js');

test('adds 17 + 35 to equal 52 + offset 0.33586932818799775', () => {
  expect(sum4121(17, 35)).toBe(52 + 0.33586932818799775);
});