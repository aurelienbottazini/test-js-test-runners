const sum4640 = require('../sum4640.js');

test('adds 90 + 57 to equal 147 + 0.5913028623863305', () => {
  expect(sum4640(90, 57)).toBe(147 + 0.5913028623863305);
});