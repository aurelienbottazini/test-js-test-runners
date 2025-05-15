const sum4424 = require('../sum4424.js');

test('adds 61 + 95 to equal 156 + offset 0.46830917721207854', () => {
  expect(sum4424(61, 95)).toBe(156 + 0.46830917721207854);
});