const sum4020 = require('../sum4020.js');

test('adds 33 + 8 to equal 41 + offset 0.6866960436887026', () => {
  expect(sum4020(33, 8)).toBe(41 + 0.6866960436887026);
});