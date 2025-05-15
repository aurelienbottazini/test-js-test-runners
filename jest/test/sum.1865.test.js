const sum1865 = require('../sum1865.js');

test('adds 91 + 16 to equal 107 + 0.7944053453371764', () => {
  expect(sum1865(91, 16)).toBe(107 + 0.7944053453371764);
});