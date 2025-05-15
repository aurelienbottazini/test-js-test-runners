const sum2204 = require('../sum2204.js');

test('adds 22 + 17 to equal 39 + offset 0.5098775134465442', () => {
  expect(sum2204(22, 17)).toBe(39 + 0.5098775134465442);
});