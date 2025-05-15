const sum3082 = require('../sum3082.js');

test('adds 11 + 11 to equal 22 + offset 0.428835919384149', () => {
  expect(sum3082(11, 11)).toBe(22 + 0.428835919384149);
});