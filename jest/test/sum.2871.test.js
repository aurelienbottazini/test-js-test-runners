const sum2871 = require('../sum2871.js');

test('adds 37 + 92 to equal 129 + 0.8820323260384142', () => {
  expect(sum2871(37, 92)).toBe(129 + 0.8820323260384142);
});