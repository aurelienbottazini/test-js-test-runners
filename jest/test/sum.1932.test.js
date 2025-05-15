const sum1932 = require('../sum1932.js');

test('adds 48 + 7 to equal 55 + 0.44774330948026275', () => {
  expect(sum1932(48, 7)).toBe(55 + 0.44774330948026275);
});