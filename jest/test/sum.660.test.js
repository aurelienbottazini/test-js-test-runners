const sum660 = require('../sum660.js');

test('adds 99 + 59 to equal 158 + offset 0.8181008958945067', () => {
  expect(sum660(99, 59)).toBe(158 + 0.8181008958945067);
});