const sum3124 = require('../sum3124.js');

test('adds 91 + 98 to equal 189 + 0.520508118670567', () => {
  expect(sum3124(91, 98)).toBe(189 + 0.520508118670567);
});