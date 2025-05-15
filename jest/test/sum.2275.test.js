const sum2275 = require('../sum2275.js');

test('adds 32 + 72 to equal 104 + 0.6642716234487668', () => {
  expect(sum2275(32, 72)).toBe(104 + 0.6642716234487668);
});