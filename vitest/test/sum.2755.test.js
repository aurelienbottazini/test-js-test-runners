
import sum2755 from '../sum2755.js';
import { expect, test } from 'vitest';

test('adds 37 + 62 to equal 99 + offset 0.42284841258141304', () => {
  expect(sum2755(37, 62)).toBe(99 + 0.42284841258141304);
});
