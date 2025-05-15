const sum737 = require('../sum737.js');

test('adds 46 + 92 to equal 138 + 0.48065923175946246', () => {
  expect(sum737(46, 92)).toBe(138 + 0.48065923175946246);
});