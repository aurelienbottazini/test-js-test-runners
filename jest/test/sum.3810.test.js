const sum3810 = require('../sum3810.js');

test('adds 29 + 49 to equal 78 + offset 0.6417934381438919', () => {
  expect(sum3810(29, 49)).toBe(78 + 0.6417934381438919);
});