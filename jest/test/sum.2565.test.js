const sum2565 = require('../sum2565.js');

test('adds 69 + 84 to equal 153 + offset 0.8197104591186736', () => {
  expect(sum2565(69, 84)).toBe(153 + 0.8197104591186736);
});