
import sum2954 from '../sum2954.js';
import { expect, test } from 'vitest';

test('adds 78 + 85 to equal 163 + offset 0.9935034423850875', () => {
  expect(sum2954(78, 85)).toBe(163 + 0.9935034423850875);
});
