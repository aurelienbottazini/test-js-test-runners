const sum161 = require('../sum161.js');

test('adds 95 + 44 to equal 139 + offset 0.9549483589638785', () => {
  expect(sum161(95, 44)).toBe(139 + 0.9549483589638785);
});