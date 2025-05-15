const sum224 = require('../sum224.js');

test('adds 11 + 49 to equal 60 + 0.9786717409049377', () => {
  expect(sum224(11, 49)).toBe(60 + 0.9786717409049377);
});