const sum4214 = require('../sum4214.js');

test('adds 46 + 84 to equal 130 + 0.613701128556993', () => {
  expect(sum4214(46, 84)).toBe(130 + 0.613701128556993);
});