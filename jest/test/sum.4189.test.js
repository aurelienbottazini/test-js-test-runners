const sum4189 = require('../sum4189.js');

test('adds 99 + 97 to equal 196 + offset 0.12350083548441182', () => {
  expect(sum4189(99, 97)).toBe(196 + 0.12350083548441182);
});