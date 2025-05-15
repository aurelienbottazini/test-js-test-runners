const sum4062 = require('../sum4062.js');

test('adds 38 + 77 to equal 115 + offset 0.3909364649090582', () => {
  expect(sum4062(38, 77)).toBe(115 + 0.3909364649090582);
});