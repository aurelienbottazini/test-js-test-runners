
import sum4346 from '../sum4346.js';
import { expect, test } from 'vitest';

test('adds 88 + 69 to equal 157 + offset 0.030286232924215395', () => {
  expect(sum4346(88, 69)).toBe(157 + 0.030286232924215395);
});
