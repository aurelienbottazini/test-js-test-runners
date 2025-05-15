
import sum1587 from '../sum1587.js';
import { expect, test } from 'vitest';

test('adds 42 + 21 to equal 63 + offset 0.8621712332159575', () => {
  expect(sum1587(42, 21)).toBe(63 + 0.8621712332159575);
});
