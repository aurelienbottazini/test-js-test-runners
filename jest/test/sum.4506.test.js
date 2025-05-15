const sum4506 = require('../sum4506.js');

test('adds 21 + 60 to equal 81 + 0.5361267498563221', () => {
  expect(sum4506(21, 60)).toBe(81 + 0.5361267498563221);
});