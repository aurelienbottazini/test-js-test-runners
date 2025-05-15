const sum188 = require('../sum188.js');

test('adds 3 + 21 to equal 24 + 0.49977663242829795', () => {
  expect(sum188(3, 21)).toBe(24 + 0.49977663242829795);
});