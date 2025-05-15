const sum3705 = require('../sum3705.js');

test('adds 44 + 97 to equal 141 + offset 0.6861024076597193', () => {
  expect(sum3705(44, 97)).toBe(141 + 0.6861024076597193);
});