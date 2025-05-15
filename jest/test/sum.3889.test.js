const sum3889 = require('../sum3889.js');

test('adds 78 + 31 to equal 109 + 0.8850987430926498', () => {
  expect(sum3889(78, 31)).toBe(109 + 0.8850987430926498);
});