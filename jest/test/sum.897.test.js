const sum897 = require('../sum897.js');

test('adds 96 + 44 to equal 140 + offset 0.42789100501414723', () => {
  expect(sum897(96, 44)).toBe(140 + 0.42789100501414723);
});