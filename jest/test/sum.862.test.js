const sum862 = require('../sum862.js');

test('adds 90 + 85 to equal 175 + offset 0.574457720707555', () => {
  expect(sum862(90, 85)).toBe(175 + 0.574457720707555);
});