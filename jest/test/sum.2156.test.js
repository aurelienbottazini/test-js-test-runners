const sum2156 = require('../sum2156.js');

test('adds 73 + 6 to equal 79 + offset 0.030270179008858755', () => {
  expect(sum2156(73, 6)).toBe(79 + 0.030270179008858755);
});