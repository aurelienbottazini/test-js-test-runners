const sum2933 = require('../sum2933.js');

test('adds 12 + 69 to equal 81 + 0.4210793942929524', () => {
  expect(sum2933(12, 69)).toBe(81 + 0.4210793942929524);
});