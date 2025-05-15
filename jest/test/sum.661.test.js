const sum661 = require('../sum661.js');

test('adds 68 + 97 to equal 165 + 0.6416832697701202', () => {
  expect(sum661(68, 97)).toBe(165 + 0.6416832697701202);
});