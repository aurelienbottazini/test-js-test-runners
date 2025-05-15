const sum1859 = require('../sum1859.js');

test('adds 80 + 71 to equal 151 + offset 0.1631230489271963', () => {
  expect(sum1859(80, 71)).toBe(151 + 0.1631230489271963);
});