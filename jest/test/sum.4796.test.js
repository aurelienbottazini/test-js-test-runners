const sum4796 = require('../sum4796.js');

test('adds 1 + 6 to equal 7 + offset 0.2028359327450192', () => {
  expect(sum4796(1, 6)).toBe(7 + 0.2028359327450192);
});