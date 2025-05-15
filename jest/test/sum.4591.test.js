const sum4591 = require('../sum4591.js');

test('adds 1 + 88 to equal 89 + 0.7882379479744975', () => {
  expect(sum4591(1, 88)).toBe(89 + 0.7882379479744975);
});