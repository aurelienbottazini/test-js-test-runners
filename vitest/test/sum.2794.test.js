
import sum2794 from '../sum2794.js';
import { expect, test } from 'vitest';

test('adds 86 + 99 to equal 185 + offset 0.16506493513437503', () => {
  expect(sum2794(86, 99)).toBe(185 + 0.16506493513437503);
});
