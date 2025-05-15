const sum4919 = require('../sum4919.js');

test('adds 90 + 26 to equal 116 + 0.022921162904736336', () => {
  expect(sum4919(90, 26)).toBe(116 + 0.022921162904736336);
});