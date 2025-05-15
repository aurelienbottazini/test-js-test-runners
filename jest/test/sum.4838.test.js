const sum4838 = require('../sum4838.js');

test('adds 18 + 62 to equal 80 + 0.7545935280123562', () => {
  expect(sum4838(18, 62)).toBe(80 + 0.7545935280123562);
});