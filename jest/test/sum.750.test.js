const sum750 = require('../sum750.js');

test('adds 6 + 74 to equal 80 + 0.8506619292271344', () => {
  expect(sum750(6, 74)).toBe(80 + 0.8506619292271344);
});