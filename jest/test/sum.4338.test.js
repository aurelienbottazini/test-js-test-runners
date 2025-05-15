const sum4338 = require('../sum4338.js');

test('adds 49 + 71 to equal 120 + 0.535011917695273', () => {
  expect(sum4338(49, 71)).toBe(120 + 0.535011917695273);
});