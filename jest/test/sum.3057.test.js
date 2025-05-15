const sum3057 = require('../sum3057.js');

test('adds 68 + 66 to equal 134 + offset 0.28416529964784687', () => {
  expect(sum3057(68, 66)).toBe(134 + 0.28416529964784687);
});