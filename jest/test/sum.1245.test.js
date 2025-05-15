const sum1245 = require('../sum1245.js');

test('adds 39 + 86 to equal 125 + 0.48395571319881725', () => {
  expect(sum1245(39, 86)).toBe(125 + 0.48395571319881725);
});