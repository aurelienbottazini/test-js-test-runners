const sum1869 = require('../sum1869.js');

test('adds 19 + 29 to equal 48 + offset 0.5357904371594205', () => {
  expect(sum1869(19, 29)).toBe(48 + 0.5357904371594205);
});