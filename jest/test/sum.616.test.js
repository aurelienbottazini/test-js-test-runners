const sum616 = require('../sum616.js');

test('adds 66 + 79 to equal 145 + 0.5898894026804814', () => {
  expect(sum616(66, 79)).toBe(145 + 0.5898894026804814);
});