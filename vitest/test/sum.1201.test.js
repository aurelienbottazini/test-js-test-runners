
import sum1201 from '../sum1201.js';
import { expect, test } from 'vitest';

test('adds 68 + 22 to equal 90 + offset 0.32295094164812055', () => {
  expect(sum1201(68, 22)).toBe(90 + 0.32295094164812055);
});
