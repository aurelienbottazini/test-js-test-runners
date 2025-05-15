const sum1904 = require('../sum1904.js');

test('adds 93 + 28 to equal 121 + 0.7614306784871869', () => {
  expect(sum1904(93, 28)).toBe(121 + 0.7614306784871869);
});