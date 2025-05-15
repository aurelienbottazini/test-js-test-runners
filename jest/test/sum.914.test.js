const sum914 = require('../sum914.js');

test('adds 18 + 57 to equal 75 + offset 0.2232502227798696', () => {
  expect(sum914(18, 57)).toBe(75 + 0.2232502227798696);
});