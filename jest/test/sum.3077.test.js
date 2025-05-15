const sum3077 = require('../sum3077.js');

test('adds 3 + 64 to equal 67 + offset 0.9541055366565209', () => {
  expect(sum3077(3, 64)).toBe(67 + 0.9541055366565209);
});