const sum993 = require('../sum993.js');

test('adds 20 + 71 to equal 91 + 0.9037237635298864', () => {
  expect(sum993(20, 71)).toBe(91 + 0.9037237635298864);
});