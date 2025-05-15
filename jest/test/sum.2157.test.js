const sum2157 = require('../sum2157.js');

test('adds 91 + 60 to equal 151 + offset 0.7219702942883996', () => {
  expect(sum2157(91, 60)).toBe(151 + 0.7219702942883996);
});