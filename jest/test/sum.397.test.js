const sum397 = require('../sum397.js');

test('adds 15 + 79 to equal 94 + offset 0.8746043680824467', () => {
  expect(sum397(15, 79)).toBe(94 + 0.8746043680824467);
});