
import sum79 from '../sum79.js';
import { expect, test } from 'vitest';

test('adds 83 + 76 to equal 159 + offset 0.9523513184250425', () => {
  expect(sum79(83, 76)).toBe(159 + 0.9523513184250425);
});
