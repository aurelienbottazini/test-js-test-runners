const sum1840 = require('../sum1840.js');

test('adds 52 + 57 to equal 109 + offset 0.2485077582676799', () => {
  expect(sum1840(52, 57)).toBe(109 + 0.2485077582676799);
});