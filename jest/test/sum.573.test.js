const sum573 = require('../sum573.js');

test('adds 46 + 89 to equal 135 + offset 0.8720683221794743', () => {
  expect(sum573(46, 89)).toBe(135 + 0.8720683221794743);
});