const sum2188 = require('../sum2188.js');

test('adds 74 + 25 to equal 99 + 0.8748854547784762', () => {
  expect(sum2188(74, 25)).toBe(99 + 0.8748854547784762);
});