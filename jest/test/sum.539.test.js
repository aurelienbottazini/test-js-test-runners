const sum539 = require('../sum539.js');

test('adds 53 + 43 to equal 96 + 0.9991295467879905', () => {
  expect(sum539(53, 43)).toBe(96 + 0.9991295467879905);
});