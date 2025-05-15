const sum807 = require('../sum807.js');

test('adds 77 + 50 to equal 127 + 0.8535021080140373', () => {
  expect(sum807(77, 50)).toBe(127 + 0.8535021080140373);
});