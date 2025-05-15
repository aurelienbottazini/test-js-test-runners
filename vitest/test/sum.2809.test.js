
import sum2809 from '../sum2809.js';
import { expect, test } from 'vitest';

test('adds 60 + 56 to equal 116 + offset 0.5134220757005956', () => {
  expect(sum2809(60, 56)).toBe(116 + 0.5134220757005956);
});
