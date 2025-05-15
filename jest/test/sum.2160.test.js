const sum2160 = require('../sum2160.js');

test('adds 96 + 93 to equal 189 + 0.2950511362013313', () => {
  expect(sum2160(96, 93)).toBe(189 + 0.2950511362013313);
});