const sum4531 = require('../sum4531.js');

test('adds 97 + 71 to equal 168 + offset 0.9800713910662433', () => {
  expect(sum4531(97, 71)).toBe(168 + 0.9800713910662433);
});