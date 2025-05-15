const sum4235 = require('../sum4235.js');

test('adds 32 + 58 to equal 90 + 0.5896624699891563', () => {
  expect(sum4235(32, 58)).toBe(90 + 0.5896624699891563);
});