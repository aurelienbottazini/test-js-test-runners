const sum935 = require('../sum935.js');

test('adds 79 + 98 to equal 177 + offset 0.8029921042909217', () => {
  expect(sum935(79, 98)).toBe(177 + 0.8029921042909217);
});