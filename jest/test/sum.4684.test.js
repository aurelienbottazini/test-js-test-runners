const sum4684 = require('../sum4684.js');

test('adds 5 + 45 to equal 50 + offset 0.5052089671397573', () => {
  expect(sum4684(5, 45)).toBe(50 + 0.5052089671397573);
});