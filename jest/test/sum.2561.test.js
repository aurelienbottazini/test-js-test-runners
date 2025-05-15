const sum2561 = require('../sum2561.js');

test('adds 75 + 60 to equal 135 + offset 0.25982977165356147', () => {
  expect(sum2561(75, 60)).toBe(135 + 0.25982977165356147);
});