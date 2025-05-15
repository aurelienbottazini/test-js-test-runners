const sum2499 = require('../sum2499.js');

test('adds 76 + 46 to equal 122 + offset 0.00911768565501625', () => {
  expect(sum2499(76, 46)).toBe(122 + 0.00911768565501625);
});