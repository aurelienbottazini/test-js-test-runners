const sum255 = require('../sum255.js');

test('adds 18 + 81 to equal 99 + offset 0.3227792594241512', () => {
  expect(sum255(18, 81)).toBe(99 + 0.3227792594241512);
});