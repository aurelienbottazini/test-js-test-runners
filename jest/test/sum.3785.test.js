const sum3785 = require('../sum3785.js');

test('adds 52 + 97 to equal 149 + 0.6682833246663401', () => {
  expect(sum3785(52, 97)).toBe(149 + 0.6682833246663401);
});