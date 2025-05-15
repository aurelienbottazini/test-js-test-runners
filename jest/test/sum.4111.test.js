const sum4111 = require('../sum4111.js');

test('adds 26 + 66 to equal 92 + offset 0.18907616792628879', () => {
  expect(sum4111(26, 66)).toBe(92 + 0.18907616792628879);
});