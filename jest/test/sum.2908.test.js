const sum2908 = require('../sum2908.js');

test('adds 36 + 59 to equal 95 + 0.43304212586435', () => {
  expect(sum2908(36, 59)).toBe(95 + 0.43304212586435);
});