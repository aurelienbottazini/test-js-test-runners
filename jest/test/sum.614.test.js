const sum614 = require('../sum614.js');

test('adds 71 + 12 to equal 83 + 0.04137118028759523', () => {
  expect(sum614(71, 12)).toBe(83 + 0.04137118028759523);
});