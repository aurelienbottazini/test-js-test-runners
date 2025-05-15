const sum1388 = require('../sum1388.js');

test('adds 61 + 29 to equal 90 + offset 0.4564044040855959', () => {
  expect(sum1388(61, 29)).toBe(90 + 0.4564044040855959);
});