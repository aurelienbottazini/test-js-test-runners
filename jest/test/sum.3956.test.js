const sum3956 = require('../sum3956.js');

test('adds 5 + 64 to equal 69 + 0.23116476179947965', () => {
  expect(sum3956(5, 64)).toBe(69 + 0.23116476179947965);
});