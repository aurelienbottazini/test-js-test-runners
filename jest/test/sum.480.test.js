const sum480 = require('../sum480.js');

test('adds 46 + 20 to equal 66 + offset 0.5045932248499617', () => {
  expect(sum480(46, 20)).toBe(66 + 0.5045932248499617);
});