const sum4289 = require('../sum4289.js');

test('adds 39 + 66 to equal 105 + 0.413824158501357', () => {
  expect(sum4289(39, 66)).toBe(105 + 0.413824158501357);
});