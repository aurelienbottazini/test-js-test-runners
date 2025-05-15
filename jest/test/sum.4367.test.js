const sum4367 = require('../sum4367.js');

test('adds 72 + 58 to equal 130 + offset 0.7010185256157584', () => {
  expect(sum4367(72, 58)).toBe(130 + 0.7010185256157584);
});