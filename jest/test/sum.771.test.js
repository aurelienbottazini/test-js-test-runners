const sum771 = require('../sum771.js');

test('adds 10 + 0 to equal 10 + offset 0.36397829961755357', () => {
  expect(sum771(10, 0)).toBe(10 + 0.36397829961755357);
});