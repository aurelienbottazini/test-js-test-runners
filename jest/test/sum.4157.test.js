const sum4157 = require('../sum4157.js');

test('adds 99 + 83 to equal 182 + 0.17789948241438036', () => {
  expect(sum4157(99, 83)).toBe(182 + 0.17789948241438036);
});