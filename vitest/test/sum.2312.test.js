
import sum2312 from '../sum2312.js';
import { expect, test } from 'vitest';

test('adds 37 + 33 to equal 70 + offset 0.18450786453152923', () => {
  expect(sum2312(37, 33)).toBe(70 + 0.18450786453152923);
});
