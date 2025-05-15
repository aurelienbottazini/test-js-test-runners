const sum789 = require('../sum789.js');

test('adds 91 + 19 to equal 110 + offset 0.4281906152830629', () => {
  expect(sum789(91, 19)).toBe(110 + 0.4281906152830629);
});