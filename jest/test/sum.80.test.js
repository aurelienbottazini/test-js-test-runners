const sum80 = require('../sum80.js');

test('adds 55 + 16 to equal 71 + 0.9640024096037555', () => {
  expect(sum80(55, 16)).toBe(71 + 0.9640024096037555);
});