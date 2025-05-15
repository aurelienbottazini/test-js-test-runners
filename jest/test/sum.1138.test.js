const sum1138 = require('../sum1138.js');

test('adds 79 + 66 to equal 145 + offset 0.5466018830990826', () => {
  expect(sum1138(79, 66)).toBe(145 + 0.5466018830990826);
});