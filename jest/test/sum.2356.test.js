const sum2356 = require('../sum2356.js');

test('adds 11 + 91 to equal 102 + 0.8244437150760777', () => {
  expect(sum2356(11, 91)).toBe(102 + 0.8244437150760777);
});