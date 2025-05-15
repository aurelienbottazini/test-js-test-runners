const sum4084 = require('../sum4084.js');

test('adds 71 + 73 to equal 144 + 0.5198807166847678', () => {
  expect(sum4084(71, 73)).toBe(144 + 0.5198807166847678);
});