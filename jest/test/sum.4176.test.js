const sum4176 = require('../sum4176.js');

test('adds 91 + 12 to equal 103 + 0.6514265925849028', () => {
  expect(sum4176(91, 12)).toBe(103 + 0.6514265925849028);
});