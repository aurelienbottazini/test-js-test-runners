const sum2013 = require('../sum2013.js');

test('adds 66 + 0 to equal 66 + 0.876498138330963', () => {
  expect(sum2013(66, 0)).toBe(66 + 0.876498138330963);
});