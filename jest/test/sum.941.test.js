const sum941 = require('../sum941.js');

test('adds 67 + 86 to equal 153 + offset 0.07751374209524875', () => {
  expect(sum941(67, 86)).toBe(153 + 0.07751374209524875);
});