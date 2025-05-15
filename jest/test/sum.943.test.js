const sum943 = require('../sum943.js');

test('adds 79 + 99 to equal 178 + 0.9356033643529198', () => {
  expect(sum943(79, 99)).toBe(178 + 0.9356033643529198);
});