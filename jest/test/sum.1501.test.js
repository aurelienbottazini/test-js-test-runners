const sum1501 = require('../sum1501.js');

test('adds 8 + 57 to equal 65 + 0.5593345216510012', () => {
  expect(sum1501(8, 57)).toBe(65 + 0.5593345216510012);
});