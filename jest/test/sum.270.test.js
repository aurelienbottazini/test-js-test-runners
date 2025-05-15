const sum270 = require('../sum270.js');

test('adds 32 + 51 to equal 83 + 0.2370579148801112', () => {
  expect(sum270(32, 51)).toBe(83 + 0.2370579148801112);
});