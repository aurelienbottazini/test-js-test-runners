const sum3428 = require('../sum3428.js');

test('adds 33 + 50 to equal 83 + offset 0.8624446444549083', () => {
  expect(sum3428(33, 50)).toBe(83 + 0.8624446444549083);
});