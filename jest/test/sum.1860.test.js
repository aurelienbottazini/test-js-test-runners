const sum1860 = require('../sum1860.js');

test('adds 15 + 55 to equal 70 + offset 0.20491678917740086', () => {
  expect(sum1860(15, 55)).toBe(70 + 0.20491678917740086);
});