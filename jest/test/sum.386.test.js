const sum386 = require('../sum386.js');

test('adds 22 + 19 to equal 41 + offset 0.2000576526157687', () => {
  expect(sum386(22, 19)).toBe(41 + 0.2000576526157687);
});