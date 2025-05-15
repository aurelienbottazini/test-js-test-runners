const sum3837 = require('../sum3837.js');

test('adds 98 + 85 to equal 183 + 0.5508442730486802', () => {
  expect(sum3837(98, 85)).toBe(183 + 0.5508442730486802);
});