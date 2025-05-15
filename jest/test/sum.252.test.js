const sum252 = require('../sum252.js');

test('adds 67 + 76 to equal 143 + 0.5198098331199748', () => {
  expect(sum252(67, 76)).toBe(143 + 0.5198098331199748);
});