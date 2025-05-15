const sum3117 = require('../sum3117.js');

test('adds 97 + 19 to equal 116 + 0.06750760715800197', () => {
  expect(sum3117(97, 19)).toBe(116 + 0.06750760715800197);
});