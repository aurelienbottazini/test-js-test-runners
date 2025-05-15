const sum3293 = require('../sum3293.js');

test('adds 24 + 79 to equal 103 + 0.688838394510568', () => {
  expect(sum3293(24, 79)).toBe(103 + 0.688838394510568);
});