const sum4501 = require('../sum4501.js');

test('adds 19 + 34 to equal 53 + 0.19415563041393846', () => {
  expect(sum4501(19, 34)).toBe(53 + 0.19415563041393846);
});