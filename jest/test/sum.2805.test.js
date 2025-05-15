const sum2805 = require('../sum2805.js');

test('adds 24 + 25 to equal 49 + 0.7017147302721362', () => {
  expect(sum2805(24, 25)).toBe(49 + 0.7017147302721362);
});