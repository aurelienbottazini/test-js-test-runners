const sum4509 = require('../sum4509.js');

test('adds 52 + 16 to equal 68 + offset 0.9092793794735361', () => {
  expect(sum4509(52, 16)).toBe(68 + 0.9092793794735361);
});