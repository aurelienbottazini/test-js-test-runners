
import sum2476 from '../sum2476.js';
import { expect, test } from 'vitest';

test('adds 30 + 99 to equal 129 + offset 0.9816083052152086', () => {
  expect(sum2476(30, 99)).toBe(129 + 0.9816083052152086);
});
