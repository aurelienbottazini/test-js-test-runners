const sum4198 = require('../sum4198.js');

test('adds 20 + 33 to equal 53 + 0.009715960970487547', () => {
  expect(sum4198(20, 33)).toBe(53 + 0.009715960970487547);
});