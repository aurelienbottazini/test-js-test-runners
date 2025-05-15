const sum939 = require('../sum939.js');

test('adds 8 + 28 to equal 36 + offset 0.5642620091386604', () => {
  expect(sum939(8, 28)).toBe(36 + 0.5642620091386604);
});