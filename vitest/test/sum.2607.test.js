
import sum2607 from '../sum2607.js';
import { expect, test } from 'vitest';

test('adds 88 + 41 to equal 129 + offset 0.06984920479216139', () => {
  expect(sum2607(88, 41)).toBe(129 + 0.06984920479216139);
});
