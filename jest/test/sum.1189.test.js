const sum1189 = require('../sum1189.js');

test('adds 2 + 98 to equal 100 + offset 0.07561563657959669', () => {
  expect(sum1189(2, 98)).toBe(100 + 0.07561563657959669);
});