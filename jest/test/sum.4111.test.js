const sum4111 = require('../sum4111.js');

test('adds 17 + 29 to equal 46 + 0.4516191582212339', () => {
  expect(sum4111(17, 29)).toBe(46 + 0.4516191582212339);
});