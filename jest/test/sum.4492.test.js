const sum4492 = require('../sum4492.js');

test('adds 16 + 65 to equal 81 + offset 0.019524638334137867', () => {
  expect(sum4492(16, 65)).toBe(81 + 0.019524638334137867);
});