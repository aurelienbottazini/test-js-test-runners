const sum4284 = require('../sum4284.js');

test('adds 36 + 63 to equal 99 + offset 0.6049947019267973', () => {
  expect(sum4284(36, 63)).toBe(99 + 0.6049947019267973);
});