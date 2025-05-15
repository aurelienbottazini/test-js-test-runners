const sum2082 = require('../sum2082.js');

test('adds 31 + 71 to equal 102 + offset 0.2607986505328399', () => {
  expect(sum2082(31, 71)).toBe(102 + 0.2607986505328399);
});