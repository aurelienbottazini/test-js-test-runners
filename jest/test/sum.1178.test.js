const sum1178 = require('../sum1178.js');

test('adds 80 + 97 to equal 177 + offset 0.6954714689152317', () => {
  expect(sum1178(80, 97)).toBe(177 + 0.6954714689152317);
});