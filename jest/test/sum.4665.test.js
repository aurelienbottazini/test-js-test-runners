const sum4665 = require('../sum4665.js');

test('adds 3 + 27 to equal 30 + 0.40565397326998043', () => {
  expect(sum4665(3, 27)).toBe(30 + 0.40565397326998043);
});