const sum373 = require('../sum373.js');

test('adds 29 + 4 to equal 33 + 0.8934250643058701', () => {
  expect(sum373(29, 4)).toBe(33 + 0.8934250643058701);
});