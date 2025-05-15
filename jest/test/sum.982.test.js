const sum982 = require('../sum982.js');

test('adds 50 + 56 to equal 106 + 0.3429026928996376', () => {
  expect(sum982(50, 56)).toBe(106 + 0.3429026928996376);
});