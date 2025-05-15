const sum186 = require('../sum186.js');

test('adds 2 + 56 to equal 58 + 0.11607116992403599', () => {
  expect(sum186(2, 56)).toBe(58 + 0.11607116992403599);
});