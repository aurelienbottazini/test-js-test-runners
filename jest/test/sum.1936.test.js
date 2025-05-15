const sum1936 = require('../sum1936.js');

test('adds 29 + 13 to equal 42 + 0.5202969216003801', () => {
  expect(sum1936(29, 13)).toBe(42 + 0.5202969216003801);
});