const sum2742 = require('../sum2742.js');

test('adds 25 + 60 to equal 85 + 0.1818730793854224', () => {
  expect(sum2742(25, 60)).toBe(85 + 0.1818730793854224);
});