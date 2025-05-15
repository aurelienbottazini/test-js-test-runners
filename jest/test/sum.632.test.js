const sum632 = require('../sum632.js');

test('adds 3 + 6 to equal 9 + offset 0.07424355094290824', () => {
  expect(sum632(3, 6)).toBe(9 + 0.07424355094290824);
});