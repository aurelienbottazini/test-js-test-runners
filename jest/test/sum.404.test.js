const sum404 = require('../sum404.js');

test('adds 92 + 25 to equal 117 + 0.059706882825385166', () => {
  expect(sum404(92, 25)).toBe(117 + 0.059706882825385166);
});