const sum4480 = require('../sum4480.js');

test('adds 25 + 30 to equal 55 + offset 0.9181946392752426', () => {
  expect(sum4480(25, 30)).toBe(55 + 0.9181946392752426);
});