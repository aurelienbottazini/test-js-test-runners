const sum4748 = require('../sum4748.js');

test('adds 10 + 68 to equal 78 + offset 0.6576805252308704', () => {
  expect(sum4748(10, 68)).toBe(78 + 0.6576805252308704);
});