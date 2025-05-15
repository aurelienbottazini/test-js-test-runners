const sum1271 = require('../sum1271.js');

test('adds 58 + 17 to equal 75 + offset 0.07894452644048167', () => {
  expect(sum1271(58, 17)).toBe(75 + 0.07894452644048167);
});