
import sum3960 from '../sum3960.js';
import { expect, test } from 'vitest';

test('adds 91 + 45 to equal 136 + offset 0.2543330012150683', () => {
  expect(sum3960(91, 45)).toBe(136 + 0.2543330012150683);
});
