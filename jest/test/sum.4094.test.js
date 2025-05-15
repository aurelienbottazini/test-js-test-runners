const sum4094 = require('../sum4094.js');

test('adds 46 + 2 to equal 48 + offset 0.13320282888209345', () => {
  expect(sum4094(46, 2)).toBe(48 + 0.13320282888209345);
});