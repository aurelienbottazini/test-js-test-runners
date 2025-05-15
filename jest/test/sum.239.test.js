const sum239 = require('../sum239.js');

test('adds 38 + 64 to equal 102 + 0.16300641732263277', () => {
  expect(sum239(38, 64)).toBe(102 + 0.16300641732263277);
});