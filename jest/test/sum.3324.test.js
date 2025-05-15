const sum3324 = require('../sum3324.js');

test('adds 6 + 75 to equal 81 + 0.5363641197220563', () => {
  expect(sum3324(6, 75)).toBe(81 + 0.5363641197220563);
});