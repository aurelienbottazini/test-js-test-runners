
import sum3397 from '../sum3397.js';
import { expect, test } from 'vitest';

test('adds 17 + 46 to equal 63 + offset 0.6617900061671123', () => {
  expect(sum3397(17, 46)).toBe(63 + 0.6617900061671123);
});
