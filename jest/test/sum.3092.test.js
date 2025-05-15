const sum3092 = require('../sum3092.js');

test('adds 73 + 96 to equal 169 + 0.27639878380923555', () => {
  expect(sum3092(73, 96)).toBe(169 + 0.27639878380923555);
});