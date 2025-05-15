const sum825 = require('../sum825.js');

test('adds 54 + 92 to equal 146 + offset 0.7685163782144072', () => {
  expect(sum825(54, 92)).toBe(146 + 0.7685163782144072);
});