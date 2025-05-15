
import sum2994 from '../sum2994.js';
import { expect, test } from 'vitest';

test('adds 94 + 15 to equal 109 + offset 0.5312512365634556', () => {
  expect(sum2994(94, 15)).toBe(109 + 0.5312512365634556);
});
