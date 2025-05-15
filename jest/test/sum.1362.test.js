const sum1362 = require('../sum1362.js');

test('adds 48 + 38 to equal 86 + 0.2936107301516149', () => {
  expect(sum1362(48, 38)).toBe(86 + 0.2936107301516149);
});