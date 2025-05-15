const sum4996 = require('../sum4996.js');

test('adds 24 + 13 to equal 37 + offset 0.23406638529892643', () => {
  expect(sum4996(24, 13)).toBe(37 + 0.23406638529892643);
});