
import sum469 from '../sum469.js';
import { expect, test } from 'vitest';

test('adds 37 + 78 to equal 115 + offset 0.9223491526584647', () => {
  expect(sum469(37, 78)).toBe(115 + 0.9223491526584647);
});
