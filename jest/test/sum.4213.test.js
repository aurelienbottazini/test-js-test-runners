const sum4213 = require('../sum4213.js');

test('adds 46 + 59 to equal 105 + 0.2366317351487438', () => {
  expect(sum4213(46, 59)).toBe(105 + 0.2366317351487438);
});