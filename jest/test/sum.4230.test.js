const sum4230 = require('../sum4230.js');

test('adds 84 + 8 to equal 92 + offset 0.5057245853102207', () => {
  expect(sum4230(84, 8)).toBe(92 + 0.5057245853102207);
});