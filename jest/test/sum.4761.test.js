const sum4761 = require('../sum4761.js');

test('adds 1 + 12 to equal 13 + 0.5084917128485779', () => {
  expect(sum4761(1, 12)).toBe(13 + 0.5084917128485779);
});