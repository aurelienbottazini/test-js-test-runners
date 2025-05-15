const sum981 = require('../sum981.js');

test('adds 99 + 39 to equal 138 + offset 0.8547640419132169', () => {
  expect(sum981(99, 39)).toBe(138 + 0.8547640419132169);
});