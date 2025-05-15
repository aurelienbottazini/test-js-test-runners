const sum4653 = require('../sum4653.js');

test('adds 59 + 60 to equal 119 + 0.7795287106848586', () => {
  expect(sum4653(59, 60)).toBe(119 + 0.7795287106848586);
});