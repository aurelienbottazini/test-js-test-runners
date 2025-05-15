
import sum1173 from '../sum1173.js';
import { expect, test } from 'vitest';

test('adds 60 + 71 to equal 131 + offset 0.15608370694491625', () => {
  expect(sum1173(60, 71)).toBe(131 + 0.15608370694491625);
});
