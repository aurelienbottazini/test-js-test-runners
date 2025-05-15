
import sum3891 from '../sum3891.js';
import { expect, test } from 'vitest';

test('adds 42 + 11 to equal 53 + offset 0.3047248421234684', () => {
  expect(sum3891(42, 11)).toBe(53 + 0.3047248421234684);
});
