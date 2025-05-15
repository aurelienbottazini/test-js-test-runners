const sum4858 = require('../sum4858.js');

test('adds 51 + 62 to equal 113 + 0.3822829114308025', () => {
  expect(sum4858(51, 62)).toBe(113 + 0.3822829114308025);
});