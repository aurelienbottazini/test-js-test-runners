const sum4730 = require('../sum4730.js');

test('adds 20 + 91 to equal 111 + offset 0.4759612860791559', () => {
  expect(sum4730(20, 91)).toBe(111 + 0.4759612860791559);
});