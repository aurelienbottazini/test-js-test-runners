const sum539 = require('../sum539.js');

test('adds 42 + 52 to equal 94 + offset 0.4588564150300878', () => {
  expect(sum539(42, 52)).toBe(94 + 0.4588564150300878);
});