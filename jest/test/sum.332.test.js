const sum332 = require('../sum332.js');

test('adds 81 + 6 to equal 87 + offset 0.6408527469278344', () => {
  expect(sum332(81, 6)).toBe(87 + 0.6408527469278344);
});