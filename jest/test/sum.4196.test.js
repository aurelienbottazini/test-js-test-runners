const sum4196 = require('../sum4196.js');

test('adds 31 + 91 to equal 122 + offset 0.9915273515468322', () => {
  expect(sum4196(31, 91)).toBe(122 + 0.9915273515468322);
});