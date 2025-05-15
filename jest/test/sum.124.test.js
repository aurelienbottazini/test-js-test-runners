const sum124 = require('../sum124.js');

test('adds 49 + 76 to equal 125 + 0.7303082975576146', () => {
  expect(sum124(49, 76)).toBe(125 + 0.7303082975576146);
});