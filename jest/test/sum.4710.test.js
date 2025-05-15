const sum4710 = require('../sum4710.js');

test('adds 37 + 66 to equal 103 + 0.8649155096566259', () => {
  expect(sum4710(37, 66)).toBe(103 + 0.8649155096566259);
});