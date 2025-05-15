const sum4395 = require('../sum4395.js');

test('adds 62 + 66 to equal 128 + 0.24537647176306243', () => {
  expect(sum4395(62, 66)).toBe(128 + 0.24537647176306243);
});