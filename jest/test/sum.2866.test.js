const sum2866 = require('../sum2866.js');

test('adds 56 + 27 to equal 83 + offset 0.5688491196932904', () => {
  expect(sum2866(56, 27)).toBe(83 + 0.5688491196932904);
});