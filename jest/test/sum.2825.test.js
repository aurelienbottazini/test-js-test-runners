const sum2825 = require('../sum2825.js');

test('adds 38 + 34 to equal 72 + offset 0.5573386827727584', () => {
  expect(sum2825(38, 34)).toBe(72 + 0.5573386827727584);
});