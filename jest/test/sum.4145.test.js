const sum4145 = require('../sum4145.js');

test('adds 64 + 81 to equal 145 + offset 0.009348919409282175', () => {
  expect(sum4145(64, 81)).toBe(145 + 0.009348919409282175);
});