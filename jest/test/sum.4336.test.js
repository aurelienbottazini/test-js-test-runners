const sum4336 = require('../sum4336.js');

test('adds 70 + 64 to equal 134 + offset 0.0769832162135613', () => {
  expect(sum4336(70, 64)).toBe(134 + 0.0769832162135613);
});