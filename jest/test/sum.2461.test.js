const sum2461 = require('../sum2461.js');

test('adds 70 + 37 to equal 107 + 0.861506246153778', () => {
  expect(sum2461(70, 37)).toBe(107 + 0.861506246153778);
});