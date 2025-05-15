const sum4906 = require('../sum4906.js');

test('adds 86 + 10 to equal 96 + 0.4335625590793243', () => {
  expect(sum4906(86, 10)).toBe(96 + 0.4335625590793243);
});