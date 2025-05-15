const sum3345 = require('../sum3345.js');

test('adds 60 + 19 to equal 79 + 0.4736665270405581', () => {
  expect(sum3345(60, 19)).toBe(79 + 0.4736665270405581);
});