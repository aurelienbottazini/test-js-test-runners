const sum3065 = require('../sum3065.js');

test('adds 97 + 3 to equal 100 + 0.39054448318619284', () => {
  expect(sum3065(97, 3)).toBe(100 + 0.39054448318619284);
});