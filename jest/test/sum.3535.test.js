const sum3535 = require('../sum3535.js');

test('adds 75 + 68 to equal 143 + 0.5478918420685494', () => {
  expect(sum3535(75, 68)).toBe(143 + 0.5478918420685494);
});