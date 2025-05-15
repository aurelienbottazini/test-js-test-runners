const sum1496 = require('../sum1496.js');

test('adds 51 + 74 to equal 125 + offset 0.7634887666386349', () => {
  expect(sum1496(51, 74)).toBe(125 + 0.7634887666386349);
});