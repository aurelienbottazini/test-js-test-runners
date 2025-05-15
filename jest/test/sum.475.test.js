const sum475 = require('../sum475.js');

test('adds 33 + 96 to equal 129 + 0.7008169971277591', () => {
  expect(sum475(33, 96)).toBe(129 + 0.7008169971277591);
});