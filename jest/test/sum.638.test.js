const sum638 = require('../sum638.js');

test('adds 10 + 1 to equal 11 + offset 0.319443379523881', () => {
  expect(sum638(10, 1)).toBe(11 + 0.319443379523881);
});