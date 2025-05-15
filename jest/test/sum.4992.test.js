const sum4992 = require('../sum4992.js');

test('adds 66 + 98 to equal 164 + offset 0.10592631082062098', () => {
  expect(sum4992(66, 98)).toBe(164 + 0.10592631082062098);
});