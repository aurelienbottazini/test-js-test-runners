const sum2559 = require('../sum2559.js');

test('adds 71 + 8 to equal 79 + offset 0.043265778811130806', () => {
  expect(sum2559(71, 8)).toBe(79 + 0.043265778811130806);
});