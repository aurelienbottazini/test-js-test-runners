const sum4876 = require('../sum4876.js');

test('adds 30 + 18 to equal 48 + 0.1401921812502579', () => {
  expect(sum4876(30, 18)).toBe(48 + 0.1401921812502579);
});