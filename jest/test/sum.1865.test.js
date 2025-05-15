const sum1865 = require('../sum1865.js');

test('adds 23 + 4 to equal 27 + offset 0.8440714971106136', () => {
  expect(sum1865(23, 4)).toBe(27 + 0.8440714971106136);
});