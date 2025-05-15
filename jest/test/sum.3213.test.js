const sum3213 = require('../sum3213.js');

test('adds 27 + 53 to equal 80 + 0.4519437248005864', () => {
  expect(sum3213(27, 53)).toBe(80 + 0.4519437248005864);
});