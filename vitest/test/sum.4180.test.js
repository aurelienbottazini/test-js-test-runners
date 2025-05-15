
import sum4180 from '../sum4180.js';
import { expect, test } from 'vitest';

test('adds 49 + 43 to equal 92 + offset 0.7193898749179826', () => {
  expect(sum4180(49, 43)).toBe(92 + 0.7193898749179826);
});
