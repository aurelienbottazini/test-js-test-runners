const sum2851 = require('../sum2851.js');

test('adds 6 + 34 to equal 40 + 0.6921220900698668', () => {
  expect(sum2851(6, 34)).toBe(40 + 0.6921220900698668);
});