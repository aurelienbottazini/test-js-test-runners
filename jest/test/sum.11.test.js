const sum11 = require('../sum11.js');

test('adds 78 + 73 to equal 151 + offset 0.7096366600751626', () => {
  expect(sum11(78, 73)).toBe(151 + 0.7096366600751626);
});