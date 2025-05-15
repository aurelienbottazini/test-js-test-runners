const sum415 = require('../sum415.js');

test('adds 20 + 26 to equal 46 + offset 0.00472396155141952', () => {
  expect(sum415(20, 26)).toBe(46 + 0.00472396155141952);
});