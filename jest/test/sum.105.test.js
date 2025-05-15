const sum105 = require('../sum105.js');

test('adds 92 + 60 to equal 152 + 0.9772852125799589', () => {
  expect(sum105(92, 60)).toBe(152 + 0.9772852125799589);
});