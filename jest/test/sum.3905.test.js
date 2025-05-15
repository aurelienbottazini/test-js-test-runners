const sum3905 = require('../sum3905.js');

test('adds 67 + 40 to equal 107 + offset 0.33524246451422235', () => {
  expect(sum3905(67, 40)).toBe(107 + 0.33524246451422235);
});