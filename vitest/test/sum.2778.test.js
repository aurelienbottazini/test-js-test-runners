
import sum2778 from '../sum2778.js';
import { expect, test } from 'vitest';

test('adds 64 + 90 to equal 154 + offset 0.8601060584893542', () => {
  expect(sum2778(64, 90)).toBe(154 + 0.8601060584893542);
});
