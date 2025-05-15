const sum3855 = require('../sum3855.js');

test('adds 1 + 66 to equal 67 + offset 0.9792617956006255', () => {
  expect(sum3855(1, 66)).toBe(67 + 0.9792617956006255);
});