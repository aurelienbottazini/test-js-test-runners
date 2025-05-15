const sum4891 = require('../sum4891.js');

test('adds 27 + 44 to equal 71 + offset 0.9957486131184173', () => {
  expect(sum4891(27, 44)).toBe(71 + 0.9957486131184173);
});