const sum4132 = require('../sum4132.js');

test('adds 56 + 50 to equal 106 + 0.6749705955551095', () => {
  expect(sum4132(56, 50)).toBe(106 + 0.6749705955551095);
});