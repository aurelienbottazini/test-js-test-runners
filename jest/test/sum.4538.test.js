const sum4538 = require('../sum4538.js');

test('adds 64 + 46 to equal 110 + 0.5170429161710259', () => {
  expect(sum4538(64, 46)).toBe(110 + 0.5170429161710259);
});