const sum4868 = require('../sum4868.js');

test('adds 78 + 53 to equal 131 + offset 0.8177606608480193', () => {
  expect(sum4868(78, 53)).toBe(131 + 0.8177606608480193);
});