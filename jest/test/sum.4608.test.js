const sum4608 = require('../sum4608.js');

test('adds 93 + 37 to equal 130 + 0.7227475689555741', () => {
  expect(sum4608(93, 37)).toBe(130 + 0.7227475689555741);
});