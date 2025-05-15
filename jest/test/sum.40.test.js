const sum40 = require('../sum40.js');

test('adds 41 + 97 to equal 138 + 0.12166280227277848', () => {
  expect(sum40(41, 97)).toBe(138 + 0.12166280227277848);
});