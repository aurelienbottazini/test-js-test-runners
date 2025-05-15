
import sum2173 from '../sum2173.js';
import { expect, test } from 'vitest';

test('adds 45 + 89 to equal 134 + offset 0.5132528643026442', () => {
  expect(sum2173(45, 89)).toBe(134 + 0.5132528643026442);
});
