const sum1741 = require('../sum1741.js');

test('adds 63 + 58 to equal 121 + 0.9130533779050417', () => {
  expect(sum1741(63, 58)).toBe(121 + 0.9130533779050417);
});