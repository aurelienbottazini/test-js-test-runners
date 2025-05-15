
import sum3791 from '../sum3791.js';
import { expect, test } from 'vitest';

test('adds 46 + 93 to equal 139 + offset 0.8963634361717002', () => {
  expect(sum3791(46, 93)).toBe(139 + 0.8963634361717002);
});
