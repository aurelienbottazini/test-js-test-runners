const sum222 = require('../sum222.js');

test('adds 51 + 93 to equal 144 + 0.569067476020383', () => {
  expect(sum222(51, 93)).toBe(144 + 0.569067476020383);
});