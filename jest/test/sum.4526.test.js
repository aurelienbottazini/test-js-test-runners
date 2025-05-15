const sum4526 = require('../sum4526.js');

test('adds 57 + 81 to equal 138 + 0.4587037816994709', () => {
  expect(sum4526(57, 81)).toBe(138 + 0.4587037816994709);
});