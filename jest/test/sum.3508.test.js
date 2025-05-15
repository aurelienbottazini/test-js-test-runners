const sum3508 = require('../sum3508.js');

test('adds 64 + 60 to equal 124 + offset 0.6085531287352403', () => {
  expect(sum3508(64, 60)).toBe(124 + 0.6085531287352403);
});