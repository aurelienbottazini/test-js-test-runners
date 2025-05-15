const sum4339 = require('../sum4339.js');

test('adds 84 + 87 to equal 171 + 0.6642591442982102', () => {
  expect(sum4339(84, 87)).toBe(171 + 0.6642591442982102);
});