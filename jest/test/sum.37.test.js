const sum37 = require('../sum37.js');

test('adds 87 + 73 to equal 160 + offset 0.22368792993031617', () => {
  expect(sum37(87, 73)).toBe(160 + 0.22368792993031617);
});