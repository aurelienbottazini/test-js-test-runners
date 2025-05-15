
import sum4303 from '../sum4303.js';
import { expect, test } from 'vitest';

test('adds 37 + 9 to equal 46 + offset 0.45912981162732347', () => {
  expect(sum4303(37, 9)).toBe(46 + 0.45912981162732347);
});
