const sum896 = require('../sum896.js');

test('adds 11 + 7 to equal 18 + 0.4609271864686231', () => {
  expect(sum896(11, 7)).toBe(18 + 0.4609271864686231);
});