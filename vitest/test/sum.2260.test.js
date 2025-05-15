
import sum2260 from '../sum2260.js';
import { expect, test } from 'vitest';

test('adds 63 + 14 to equal 77 + offset 0.09042174409027104', () => {
  expect(sum2260(63, 14)).toBe(77 + 0.09042174409027104);
});
