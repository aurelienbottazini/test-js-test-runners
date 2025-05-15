const sum3729 = require('../sum3729.js');

test('adds 38 + 60 to equal 98 + 0.3207923964291436', () => {
  expect(sum3729(38, 60)).toBe(98 + 0.3207923964291436);
});