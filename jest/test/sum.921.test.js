const sum921 = require('../sum921.js');

test('adds 53 + 92 to equal 145 + offset 0.5586051840171911', () => {
  expect(sum921(53, 92)).toBe(145 + 0.5586051840171911);
});