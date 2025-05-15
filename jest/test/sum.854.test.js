const sum854 = require('../sum854.js');

test('adds 60 + 74 to equal 134 + offset 0.3276681259297872', () => {
  expect(sum854(60, 74)).toBe(134 + 0.3276681259297872);
});