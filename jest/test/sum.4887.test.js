const sum4887 = require('../sum4887.js');

test('adds 85 + 77 to equal 162 + offset 0.16856672899099134', () => {
  expect(sum4887(85, 77)).toBe(162 + 0.16856672899099134);
});