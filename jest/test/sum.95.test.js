const sum95 = require('../sum95.js');

test('adds 73 + 26 to equal 99 + offset 0.8790994994948856', () => {
  expect(sum95(73, 26)).toBe(99 + 0.8790994994948856);
});