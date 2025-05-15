const sum4915 = require('../sum4915.js');

test('adds 91 + 87 to equal 178 + 0.9834605221337468', () => {
  expect(sum4915(91, 87)).toBe(178 + 0.9834605221337468);
});