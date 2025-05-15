
import sum3058 from '../sum3058.js';
import { expect, test } from 'vitest';

test('adds 24 + 72 to equal 96 + offset 0.9213252578744391', () => {
  expect(sum3058(24, 72)).toBe(96 + 0.9213252578744391);
});
