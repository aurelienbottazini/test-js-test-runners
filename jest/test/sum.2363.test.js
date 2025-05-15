const sum2363 = require('../sum2363.js');

test('adds 88 + 18 to equal 106 + 0.10094783807432106', () => {
  expect(sum2363(88, 18)).toBe(106 + 0.10094783807432106);
});