const sum2518 = require('../sum2518.js');

test('adds 33 + 80 to equal 113 + offset 0.7975727722924078', () => {
  expect(sum2518(33, 80)).toBe(113 + 0.7975727722924078);
});