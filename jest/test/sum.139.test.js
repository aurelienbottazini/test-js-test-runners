const sum139 = require('../sum139.js');

test('adds 82 + 82 to equal 164 + offset 0.8290648255310695', () => {
  expect(sum139(82, 82)).toBe(164 + 0.8290648255310695);
});