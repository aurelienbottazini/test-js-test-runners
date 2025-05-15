const sum4973 = require('../sum4973.js');

test('adds 62 + 1 to equal 63 + 0.1742605792694445', () => {
  expect(sum4973(62, 1)).toBe(63 + 0.1742605792694445);
});