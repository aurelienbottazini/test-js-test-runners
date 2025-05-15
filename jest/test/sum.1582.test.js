const sum1582 = require('../sum1582.js');

test('adds 89 + 82 to equal 171 + 0.5847848226045891', () => {
  expect(sum1582(89, 82)).toBe(171 + 0.5847848226045891);
});