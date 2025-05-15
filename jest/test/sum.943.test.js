const sum943 = require('../sum943.js');

test('adds 70 + 19 to equal 89 + offset 0.4195186990723955', () => {
  expect(sum943(70, 19)).toBe(89 + 0.4195186990723955);
});