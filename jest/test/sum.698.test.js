const sum698 = require('../sum698.js');

test('adds 67 + 60 to equal 127 + offset 0.6109383904174794', () => {
  expect(sum698(67, 60)).toBe(127 + 0.6109383904174794);
});