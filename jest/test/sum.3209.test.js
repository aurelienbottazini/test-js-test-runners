const sum3209 = require('../sum3209.js');

test('adds 74 + 84 to equal 158 + 0.6558761363327406', () => {
  expect(sum3209(74, 84)).toBe(158 + 0.6558761363327406);
});