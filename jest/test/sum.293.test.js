const sum293 = require('../sum293.js');

test('adds 74 + 35 to equal 109 + offset 0.9680971001703067', () => {
  expect(sum293(74, 35)).toBe(109 + 0.9680971001703067);
});