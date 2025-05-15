const sum669 = require('../sum669.js');

test('adds 17 + 20 to equal 37 + offset 0.30073908845018615', () => {
  expect(sum669(17, 20)).toBe(37 + 0.30073908845018615);
});