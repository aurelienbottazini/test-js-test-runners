
import sum2892 from '../sum2892.js';
import { expect, test } from 'vitest';

test('adds 70 + 41 to equal 111 + offset 0.3518027687113653', () => {
  expect(sum2892(70, 41)).toBe(111 + 0.3518027687113653);
});
