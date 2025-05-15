const sum4821 = require('../sum4821.js');

test('adds 44 + 14 to equal 58 + offset 0.6040971350890579', () => {
  expect(sum4821(44, 14)).toBe(58 + 0.6040971350890579);
});