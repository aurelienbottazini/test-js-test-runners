const sum599 = require('../sum599.js');

test('adds 87 + 50 to equal 137 + 0.7762960976718428', () => {
  expect(sum599(87, 50)).toBe(137 + 0.7762960976718428);
});