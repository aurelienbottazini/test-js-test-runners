const sum1676 = require('../sum1676.js');

test('adds 17 + 64 to equal 81 + offset 0.7284220698400604', () => {
  expect(sum1676(17, 64)).toBe(81 + 0.7284220698400604);
});