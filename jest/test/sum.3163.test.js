const sum3163 = require('../sum3163.js');

test('adds 89 + 4 to equal 93 + offset 0.6312677037560872', () => {
  expect(sum3163(89, 4)).toBe(93 + 0.6312677037560872);
});