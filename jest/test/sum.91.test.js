const sum91 = require('../sum91.js');

test('adds 79 + 86 to equal 165 + 0.791705115155365', () => {
  expect(sum91(79, 86)).toBe(165 + 0.791705115155365);
});