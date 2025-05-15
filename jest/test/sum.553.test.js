const sum553 = require('../sum553.js');

test('adds 61 + 37 to equal 98 + 0.43690104154394294', () => {
  expect(sum553(61, 37)).toBe(98 + 0.43690104154394294);
});