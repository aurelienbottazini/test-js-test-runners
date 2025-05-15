
import sum666 from '../sum666.js';
import { expect, test } from 'vitest';

test('adds 94 + 47 to equal 141 + offset 0.3556362176237987', () => {
  expect(sum666(94, 47)).toBe(141 + 0.3556362176237987);
});
