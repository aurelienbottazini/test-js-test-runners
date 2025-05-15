const sum3447 = require('../sum3447.js');

test('adds 22 + 46 to equal 68 + 0.06610350195574133', () => {
  expect(sum3447(22, 46)).toBe(68 + 0.06610350195574133);
});