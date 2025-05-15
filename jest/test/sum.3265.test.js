const sum3265 = require('../sum3265.js');

test('adds 39 + 77 to equal 116 + offset 0.4479206585873583', () => {
  expect(sum3265(39, 77)).toBe(116 + 0.4479206585873583);
});