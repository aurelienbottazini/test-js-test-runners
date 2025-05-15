const sum3404 = require('../sum3404.js');

test('adds 15 + 89 to equal 104 + 0.12373099534817478', () => {
  expect(sum3404(15, 89)).toBe(104 + 0.12373099534817478);
});