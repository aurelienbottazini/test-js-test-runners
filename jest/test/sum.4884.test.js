const sum4884 = require('../sum4884.js');

test('adds 65 + 37 to equal 102 + 0.6307527230311584', () => {
  expect(sum4884(65, 37)).toBe(102 + 0.6307527230311584);
});