const sum3628 = require('../sum3628.js');

test('adds 82 + 30 to equal 112 + offset 0.8925138091323104', () => {
  expect(sum3628(82, 30)).toBe(112 + 0.8925138091323104);
});