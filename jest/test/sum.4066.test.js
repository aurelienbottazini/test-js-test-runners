const sum4066 = require('../sum4066.js');

test('adds 46 + 39 to equal 85 + 0.9233275638564743', () => {
  expect(sum4066(46, 39)).toBe(85 + 0.9233275638564743);
});