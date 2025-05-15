const sum1703 = require('../sum1703.js');

test('adds 83 + 7 to equal 90 + offset 0.3796611594878251', () => {
  expect(sum1703(83, 7)).toBe(90 + 0.3796611594878251);
});