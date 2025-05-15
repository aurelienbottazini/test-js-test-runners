const sum4074 = require('../sum4074.js');

test('adds 46 + 21 to equal 67 + offset 0.4797762300184323', () => {
  expect(sum4074(46, 21)).toBe(67 + 0.4797762300184323);
});