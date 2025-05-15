const sum255 = require('../sum255.js');

test('adds 5 + 66 to equal 71 + 0.27048586403915675', () => {
  expect(sum255(5, 66)).toBe(71 + 0.27048586403915675);
});