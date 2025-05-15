const sum590 = require('../sum590.js');

test('adds 19 + 29 to equal 48 + 0.038094813143455974', () => {
  expect(sum590(19, 29)).toBe(48 + 0.038094813143455974);
});