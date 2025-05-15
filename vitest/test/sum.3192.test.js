
import sum3192 from '../sum3192.js';
import { expect, test } from 'vitest';

test('adds 48 + 99 to equal 147 + offset 0.9239059015395815', () => {
  expect(sum3192(48, 99)).toBe(147 + 0.9239059015395815);
});
