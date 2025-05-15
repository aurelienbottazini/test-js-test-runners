const sum4096 = require('../sum4096.js');

test('adds 3 + 19 to equal 22 + offset 0.013503220271938288', () => {
  expect(sum4096(3, 19)).toBe(22 + 0.013503220271938288);
});