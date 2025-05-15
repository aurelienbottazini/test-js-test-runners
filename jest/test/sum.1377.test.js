const sum1377 = require('../sum1377.js');

test('adds 16 + 20 to equal 36 + 0.8159287934226933', () => {
  expect(sum1377(16, 20)).toBe(36 + 0.8159287934226933);
});