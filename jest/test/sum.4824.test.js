const sum4824 = require('../sum4824.js');

test('adds 6 + 83 to equal 89 + offset 0.972653047505654', () => {
  expect(sum4824(6, 83)).toBe(89 + 0.972653047505654);
});