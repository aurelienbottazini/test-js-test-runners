const sum4939 = require('../sum4939.js');

test('adds 60 + 70 to equal 130 + 0.36494653928257303', () => {
  expect(sum4939(60, 70)).toBe(130 + 0.36494653928257303);
});