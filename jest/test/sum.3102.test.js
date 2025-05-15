const sum3102 = require('../sum3102.js');

test('adds 75 + 7 to equal 82 + 0.8195562372767294', () => {
  expect(sum3102(75, 7)).toBe(82 + 0.8195562372767294);
});