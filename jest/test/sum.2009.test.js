const sum2009 = require('../sum2009.js');

test('adds 6 + 62 to equal 68 + offset 0.6045856569252251', () => {
  expect(sum2009(6, 62)).toBe(68 + 0.6045856569252251);
});