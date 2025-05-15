const sum241 = require('../sum241.js');

test('adds 97 + 84 to equal 181 + offset 0.6698576830444642', () => {
  expect(sum241(97, 84)).toBe(181 + 0.6698576830444642);
});