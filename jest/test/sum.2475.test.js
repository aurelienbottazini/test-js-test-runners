const sum2475 = require('../sum2475.js');

test('adds 43 + 80 to equal 123 + offset 0.6350605500524918', () => {
  expect(sum2475(43, 80)).toBe(123 + 0.6350605500524918);
});