const sum2452 = require('../sum2452.js');

test('adds 12 + 59 to equal 71 + offset 0.8220948449317294', () => {
  expect(sum2452(12, 59)).toBe(71 + 0.8220948449317294);
});