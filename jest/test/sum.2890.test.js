const sum2890 = require('../sum2890.js');

test('adds 2 + 94 to equal 96 + 0.9046158875883983', () => {
  expect(sum2890(2, 94)).toBe(96 + 0.9046158875883983);
});