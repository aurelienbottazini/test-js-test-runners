const sum4614 = require('../sum4614.js');

test('adds 57 + 53 to equal 110 + offset 0.2846918493384397', () => {
  expect(sum4614(57, 53)).toBe(110 + 0.2846918493384397);
});