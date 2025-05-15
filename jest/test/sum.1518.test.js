const sum1518 = require('../sum1518.js');

test('adds 59 + 6 to equal 65 + 0.18639728104303033', () => {
  expect(sum1518(59, 6)).toBe(65 + 0.18639728104303033);
});