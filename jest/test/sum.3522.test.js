const sum3522 = require('../sum3522.js');

test('adds 67 + 55 to equal 122 + offset 0.8991349651732319', () => {
  expect(sum3522(67, 55)).toBe(122 + 0.8991349651732319);
});