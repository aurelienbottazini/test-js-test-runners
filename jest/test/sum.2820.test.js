const sum2820 = require('../sum2820.js');

test('adds 67 + 33 to equal 100 + offset 0.9493163870302288', () => {
  expect(sum2820(67, 33)).toBe(100 + 0.9493163870302288);
});