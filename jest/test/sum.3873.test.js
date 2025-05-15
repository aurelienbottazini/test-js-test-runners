const sum3873 = require('../sum3873.js');

test('adds 93 + 90 to equal 183 + offset 0.48871904058330384', () => {
  expect(sum3873(93, 90)).toBe(183 + 0.48871904058330384);
});