const sum59 = require('../sum59.js');

test('adds 15 + 84 to equal 99 + offset 0.7176204063002299', () => {
  expect(sum59(15, 84)).toBe(99 + 0.7176204063002299);
});