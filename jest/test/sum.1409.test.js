const sum1409 = require('../sum1409.js');

test('adds 31 + 57 to equal 88 + 0.6062330420921919', () => {
  expect(sum1409(31, 57)).toBe(88 + 0.6062330420921919);
});