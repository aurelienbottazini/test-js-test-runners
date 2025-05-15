const sum3821 = require('../sum3821.js');

test('adds 32 + 64 to equal 96 + 0.5961626088619261', () => {
  expect(sum3821(32, 64)).toBe(96 + 0.5961626088619261);
});