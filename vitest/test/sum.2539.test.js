
import sum2539 from '../sum2539.js';
import { expect, test } from 'vitest';

test('adds 63 + 94 to equal 157 + offset 0.5046359095437711', () => {
  expect(sum2539(63, 94)).toBe(157 + 0.5046359095437711);
});
