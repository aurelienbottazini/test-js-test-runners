const sum721 = require('../sum721.js');

test('adds 36 + 88 to equal 124 + 0.15091402516695773', () => {
  expect(sum721(36, 88)).toBe(124 + 0.15091402516695773);
});