const sum4509 = require('../sum4509.js');

test('adds 5 + 59 to equal 64 + 0.23103471171776446', () => {
  expect(sum4509(5, 59)).toBe(64 + 0.23103471171776446);
});