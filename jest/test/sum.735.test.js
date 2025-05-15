const sum735 = require('../sum735.js');

test('adds 70 + 0 to equal 70 + 0.8695210730199284', () => {
  expect(sum735(70, 0)).toBe(70 + 0.8695210730199284);
});