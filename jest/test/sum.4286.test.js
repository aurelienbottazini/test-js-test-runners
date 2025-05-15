const sum4286 = require('../sum4286.js');

test('adds 9 + 79 to equal 88 + offset 0.7395597021866243', () => {
  expect(sum4286(9, 79)).toBe(88 + 0.7395597021866243);
});