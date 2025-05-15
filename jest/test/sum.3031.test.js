const sum3031 = require('../sum3031.js');

test('adds 21 + 37 to equal 58 + offset 0.8227291740212942', () => {
  expect(sum3031(21, 37)).toBe(58 + 0.8227291740212942);
});