const sum1296 = require('../sum1296.js');

test('adds 25 + 27 to equal 52 + 0.7805427017005666', () => {
  expect(sum1296(25, 27)).toBe(52 + 0.7805427017005666);
});