const sum745 = require('../sum745.js');

test('adds 42 + 57 to equal 99 + offset 0.3428288301570921', () => {
  expect(sum745(42, 57)).toBe(99 + 0.3428288301570921);
});