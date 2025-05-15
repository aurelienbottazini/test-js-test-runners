const sum2666 = require('../sum2666.js');

test('adds 84 + 75 to equal 159 + offset 0.5395570730592376', () => {
  expect(sum2666(84, 75)).toBe(159 + 0.5395570730592376);
});