const sum4447 = require('../sum4447.js');

test('adds 24 + 70 to equal 94 + 0.9207408879769365', () => {
  expect(sum4447(24, 70)).toBe(94 + 0.9207408879769365);
});