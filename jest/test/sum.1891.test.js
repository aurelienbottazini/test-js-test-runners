const sum1891 = require('../sum1891.js');

test('adds 87 + 66 to equal 153 + 0.30872514488321967', () => {
  expect(sum1891(87, 66)).toBe(153 + 0.30872514488321967);
});