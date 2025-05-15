const sum946 = require('../sum946.js');

test('adds 23 + 66 to equal 89 + offset 0.8640673521333481', () => {
  expect(sum946(23, 66)).toBe(89 + 0.8640673521333481);
});