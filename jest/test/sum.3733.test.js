const sum3733 = require('../sum3733.js');

test('adds 13 + 62 to equal 75 + offset 0.62641937685358', () => {
  expect(sum3733(13, 62)).toBe(75 + 0.62641937685358);
});