const sum620 = require('../sum620.js');

test('adds 51 + 1 to equal 52 + 0.8411499638702242', () => {
  expect(sum620(51, 1)).toBe(52 + 0.8411499638702242);
});