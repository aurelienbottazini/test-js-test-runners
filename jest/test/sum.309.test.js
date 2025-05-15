const sum309 = require('../sum309.js');

test('adds 52 + 97 to equal 149 + offset 0.6697279015143699', () => {
  expect(sum309(52, 97)).toBe(149 + 0.6697279015143699);
});