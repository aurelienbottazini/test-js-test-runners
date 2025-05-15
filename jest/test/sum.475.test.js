const sum475 = require('../sum475.js');

test('adds 17 + 92 to equal 109 + offset 0.9561270725638525', () => {
  expect(sum475(17, 92)).toBe(109 + 0.9561270725638525);
});