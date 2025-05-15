const sum3569 = require('../sum3569.js');

test('adds 95 + 5 to equal 100 + 0.7475061735647864', () => {
  expect(sum3569(95, 5)).toBe(100 + 0.7475061735647864);
});