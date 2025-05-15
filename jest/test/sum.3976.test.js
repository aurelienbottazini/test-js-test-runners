const sum3976 = require('../sum3976.js');

test('adds 44 + 49 to equal 93 + 0.7254836208468646', () => {
  expect(sum3976(44, 49)).toBe(93 + 0.7254836208468646);
});