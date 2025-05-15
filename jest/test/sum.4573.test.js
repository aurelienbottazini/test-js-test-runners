const sum4573 = require('../sum4573.js');

test('adds 51 + 54 to equal 105 + 0.1563702975270289', () => {
  expect(sum4573(51, 54)).toBe(105 + 0.1563702975270289);
});