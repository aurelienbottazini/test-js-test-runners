const sum164 = require('../sum164.js');

test('adds 22 + 13 to equal 35 + offset 0.21315374188214864', () => {
  expect(sum164(22, 13)).toBe(35 + 0.21315374188214864);
});