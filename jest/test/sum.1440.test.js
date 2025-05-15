const sum1440 = require('../sum1440.js');

test('adds 53 + 16 to equal 69 + offset 0.6369485857900028', () => {
  expect(sum1440(53, 16)).toBe(69 + 0.6369485857900028);
});