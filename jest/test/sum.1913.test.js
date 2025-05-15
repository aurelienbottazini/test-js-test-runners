const sum1913 = require('../sum1913.js');

test('adds 54 + 86 to equal 140 + 0.9141174242446336', () => {
  expect(sum1913(54, 86)).toBe(140 + 0.9141174242446336);
});