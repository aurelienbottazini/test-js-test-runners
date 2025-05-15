const sum501 = require('../sum501.js');

test('adds 4 + 57 to equal 61 + 0.21003933782500728', () => {
  expect(sum501(4, 57)).toBe(61 + 0.21003933782500728);
});